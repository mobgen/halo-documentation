---
title: Open Source Contributions
---

In HALO we have high standards within the features that are implemented in the platform and in the 
native SDKs, so any contribution to the code or any new feature must match some **rules** to be approved.

## Setting up the project ##
The project consist of 3 folders, each of which can be opened in a separate window in android studio:

* **sdk**: contains the sdk related libraries and is the core in which all the rest of libraries rely on.
* **sdk-libs**: contains the libraries to interact with every part of HALO, notifications, content, etc.
* **sdk-samples**: contains the samples with some use cases of HALO.

We usually make modifications on the libraries and check them with tests since otherwise you will have to add
some use case to the Demo application. To get started execute the following commands in the root dir:

```bash
./gradlew installGradlePlugin
./gradlew installSdk
./gradlew installLibraries
```

Then everytime you make a modification you can execute the install task for the corresponding module and
test your changes in the sdk-samples.

## Code integration pipeline ##
Once you code your new feature the feature will be revised by a HALO Android SDK developer and 
it is subject for rejection, modification or acceptance. To do so, the developer have to submit
in the [github repository](https://github.com/mobgen/halo-android) a pull request from a branch 
containing the changes. 

Once the pull request is submitted it will follow this pipeline:

* A HALO member revises it and proposes changes or accepts it.
* The CI system will perform some checks to ensure the code has the quality standard we require.
* The pull request will be merged to develop and included for the 3~ weeks releases. 

## Important points ##

Here we will describe the important points that will be checked while revising your code. If any of them
is not followed, the pull request will not be merged.

### Pull request creation ###
* Must come from a branch under feature/my-branch.
* The branch name must follow the '-' name convention: every name separated by '-' and in lowercase.
* The branch have to be created from develop.
* The pull request should include a description of what is this for and some discussions related if needed.

### Code style ###
* Before submitting your code, use the cmd+L command on Android Studio to make sure the code is correctly formatted.

### Do not modify ###
* Do not modify internal project configuration related files.
* Do not change ids of the sample application.
* Do not change .gitignore without permission.
* Do not change build.gradle files without permission.
* Do not add a new library without a really good reason. We want to keep it simple.

### Code checks ###
* Public methods only can have a maximum of 2 params.
* Everything public should have the ```@Keep``` annotation.
* Everything public should have the ```@Api(currentVersion)``` annotation.
* The complexity of the methods should be as small as possible. Too complex methods will be rejected.
* Every constant related to other constant should be defined with ```@IntDef```, ```@StringDef```...
* If a public method returns an interactor it should be annotated with ```@CheckResult```.
* Every parameter and return value must have the ```@Nullable``` or ```@NonNull``` contract.
* The architecture cannot change between features, you should follow our CLEAN architecture ways of working.
* The code added contains **tests**.
* All the methods are properly javadoc documented.

## Agreement ##
By using and contributting to the SDK you agree on:

* I will not distribute the same SDK as part of another artifact different than the original ones.
* I will not perform any action or pull request in order to damage the reputation of MOBGEN, HALO or any other company project related.
* I will not distribute this SDK under any other license than the one provided in this project. 