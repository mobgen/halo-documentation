<div markdown="1">
This feature of the `SearchQuery` allows to add to the search results the instances related to those specified in the list of ids using the provided field as *foreign key*.

E.g.: Having set up a collection of authors and books (and the relationship between author and his books), the `addRelatedInstances` would allow us to retrieve all the books written by an author or a subset of authors using their ids.

{% include ios_sample_code.html 
id="addRelatedInstances" 
swift-content="open func addRelatedInstances(fieldName: String, instanceIds: [String]) -> Halo.SearchQuery"
objc-content="- (HaloSearchQuery * _Nonnull)addRelatedInstancesWithFieldName:(NSString * _Nonnull)fieldName 
instanceIds:(NSArray<NSString *> * _Nonnull)instanceIds;"
%}
</div>