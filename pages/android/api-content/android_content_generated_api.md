---
title: Android SDK - Code generation tool SDK
keywords: android, content, generated models, halo, advanced
last_updated: March 2, 2016
tags: [content]
sidebar: android_sidebar
permalink: android_content_generated_api.html
folder: android
---

## Code generation API

The HALO Content SDK provides some annotations to generate code on compilation time. When you annotate a custom model it will generate the following classes:

- **HaloTable$$ContentVersion**: provides a shared ```HaloTable``` to save the table custom model name and version. It will drop the table when the version has changed.
- **GeneratedDatabaseFromModel**: provides the code to generate the ```HaloTable$$ContentVersion``` table and a database table for each annotated model.
- **HaloTable$$ModelName**: provides the ```HaloTable``` with the name of your model to store information related to that model. It will generate one class per model annotated.
- **HaloContentQueryApi**: provides the API to perfom queries with the annotated models.

{% include note.html content="For example, if you annotate a model called ```Article``` it will generate a ```HaloTable$$Article``` class." %}

{% include tip.html content="The code generation tool will read supported annotations to generate the code and all classes will appear under **build/generated/source/apt/** folder on the ```com.mobgen.halo.android.app.generated``` package." %}

### HALO annotations supported.

The SDK provide the following annotations to generate code on compilation time.

| HALO annotations | Explanation |
|--------------|-------------|
| **@HaloSearchable** | Defines that a model can be used with the code generation tool. |
| **@HaloConstructor** | Provides the column names to the generator tool. |
| **@HaloField** | Define that a field from a class can be indexed on the local database. |
| **@HaloQuery** | Generates a class to perform custom queries. |
| **@HaloQueries** | Generates an array of HaloQueries. |

#### Example of use

We will show you an example with a model call Article using all supported annotations. This will generate the classes and the ```HaloContentQueryApi``` to perfom the queries on the local database.

##### @HaloSearchable

You can use the ```@HaloSearchable``` annotation on the class declaration. It must receive two params the version of the model and the name of the table on the database.

```java
//...
@HaloSearchable(version = 13 , tableName = "Article")
public class Article implements Parcelable {
//...
```

##### @HaloField

You can use the ```@HaloField``` annotation on a field of the class. You must provide the column name of the field to make an index.

```java
//...
@HaloField(index = true,columnName = "Title")
String mTitle;
Date mDate;
String mArticle;
String mSummary;
String mThumbnail;
@HaloField(index = true,columnName = "Image")
String mImage;
...
```

##### @HaloConstructor

You can use the ```@HaloConstructor``` annotation on a constructor of the class. You must provide all the column names of the database table in the same order as in the constructor.

```java
//...
@HaloConstructor(columnNames = {"Title","Date","ContentHtml","Summary","Thumbnail","Image"})
public Article(String title, Date date, String article, String summary, String thumnail, String image) {
    mTitle = title;
    mDate = date;
    mArticle = article;
    mSummary = summary;
    mThumbnail = thumnail;
    mImage = image;
}
//...
```

##### @HaloQuery

You can use the ```@HaloQuery``` annotation on the class declaration. You must provide a name for the method and the query to perfom with the following format. 

{% include note.html content="The ```@HaloQuery``` parameters must be declared with the following format **@{name:class}**" %}

{% include warning.html content="You must provide a ```@HaloQueries``` annotation array with all the ```@HaloQuery``` you want to perfom." %}

```java
//...
@HaloQueries(queries = 
    {
        @HaloQuery(name="deleteByTitle", query=("delete from Article where Title = @{mTitle:String}")),
        @HaloQuery(name="selectTitle",query="select * from Article where Title = @{mTitle:String}"),
        @HaloQuery(name="insertArticle",query="insert into Article(Title,Date,ContentHtml,Summary,Thumbnail,Image) VALUES (@{mTitle:String},@{mDate:Date},@{mArticle:String},@{mSummary:String},@{mThumbnail:String},@{mImage:String});")
    })
public class Article implements Parcelable {
//...
```

### HaloContentQueryApi

The abstract processor will generate a ```HaloContentQueryApi``` that works like the general content API with one method for each ```@HaloQuery``` annotation on any custom model. You can fetch the result of any query as raw cursor or as a custom content model using the ```asContent()``` method like in the general content API.

{% include warning.html content="Ensure you have created the generated database with ```HaloContentApi.with(haloinstance, locale, new GeneratedDatabaseFromModel())``` before creating an instance of the ```HaloContentQueryApi```" %}


#### Using the HaloContentQueryApi

It is fairly recommendable to create the instance as a singleton in your application class or using Dagger after installing HALO. Creating an instance of the Content Query API is really simple once you have your HALO running. To create an instance of the ```HalocontentQueryApi``` just write this following lines:

```java
HaloContentQueryApi.with(haloInstance);
```

Each ```@HaloQuery``` annotation will generate a method to perfom the operation on the autogenerated class ```HaloContentQueryApi```. To perfom the query from a model annotation with name ```selectTitle``` you must write the following:

```java
//Using as reference the my custom model Article.class
HaloContentQueryApi.with(haloInstance)
    .selectTitle("Search my title")
    .asContent(Article.class)
    .execute(new CallbackV2<List<Article>>() {
        @Override
        public void onFinish(@NonNull HaloResultV2<List<Article>> result) {
            if(result.data().size()==0){
                insertArticle();
            }
        }
});;
```

## Example of code generation tool usage

Here you can find a full example with the model called Article with HALO annotations and how to perfom queries to the database using the autogenerated ```HaloContentQueryApi```.

### Create the generated database

You must ensure that the autogenerated database was created in the Application with the following code:

{% include warning.html content="The ```GeneratedDatabaseFromModel``` class should exist on build folder so if you are having troubles clean/rebuild your project." %}   

```java
//...
HaloContentApi.with(haloInstance, locale, new GeneratedDatabaseFromModel());
//...
```

### Annotate your model

This is the custom model Article.class that we will use during the example.


```java
//... imports
@HaloSearchable(version = 13 , tableName = "Article")
@HaloQueries(queries = {
        @HaloQuery(name="selectTitle",query="select * from Article where Title = @{mTitle:String}"),
        @HaloQuery(name="insertArticle",query="insert into Article(Title,Date,ContentHtml,Summary,Thumbnail,Image) VALUES (@{mTitle:String},@{mDate:Date},@{mArticle:String},@{mSummary:String},@{mThumbnail:String},@{mImage:String});")
})
public class Article {
    @HaloField(index = true,columnName = "Title")
    String mTitle;
    Date mDate;
    String mArticle;
    String mSummary;
    String mThumbnail;
    @HaloField(index = true,columnName = "Image")
    String mImage;

    @HaloConstructor( columnNames = {"Title","Date","ContentHtml","Summary","Thumbnail","Image"})
    public Article(String title, Date date, String article, String summary, String thumnail, String image) {
        mTitle = title;
        mDate = date;
        mArticle = article;
        mSummary = summary;
        mThumbnail = thumnail;
        mImage = image;
    }
}
```

### Perfom the queries

{% include warning.html content="The ```HaloContentQuery``` methods are autogenerated and the name of each one depends on the annotation you provide in your model." %}   

Following the example to insert a new article into the database you will use the ```insertArticle``` method as follows:

```java
HaloContentQueryApi.with(haloInstance).insertArticle("Title",new Date(),"<p>Content</p>","Summary",null,mImage.getUrl())
    .asContent(Article.class)
    .execute(new CallbackV2<List<Article>>() {
        @Override
        public void onFinish(@NonNull HaloResultV2<List<Article>> result) {
            //use the result from the query
        }
    });
```
Following the example to select a article by title from the database you will use the ```selectTitle``` method as follows:

```java
HaloContentQueryApi.with(haloInstance).selectTitle("This is a title")
    .asContent(Article.class)
    .execute(new CallbackV2<List<Article>>() {
        @Override
        public void onFinish(@NonNull HaloResultV2<List<Article>> result) {
            //use the result from the query
        }
    });
```
          