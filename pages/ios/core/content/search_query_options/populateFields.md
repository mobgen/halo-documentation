<div markdown="1">
When instances contain relationships, the fields acting as *foreign keys* will not be populated by default. That behaviour can be changed by specifying a list of those which will be populated with the related instance.

{% include ios_sample_code.html id='populate-fields'
swift-content='open func populateFields(_ fields: [String]) -> Halo.SearchQuery'
objc-content='- (HaloSearchQuery * _Nonnull)populateFields:(NSArray<NSString *> * _Nonnull)fields;'
%}

**Note:** This will only cause the population of the first-level relationships. There is no direct way of getting deep population with just one request and it would need to be done manually.
</div>