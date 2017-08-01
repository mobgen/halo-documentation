<div markdown="1">
In case only certain fields of the instances of a module need to be retrieved, those can be specified using this property and providing the list of fields that will be included in the response. That way, the results will only contain the desired data, saving space and avoiding unnecessary *noise*.

{% include ios_sample_code.html id='fields' 
swift-content='open func fields(_ fields: [String]) -> Halo.SearchQuery'
objc-content='- (HaloSearchQuery * _Nonnull)fields:(NSArray<NSString *> * _Nonnull)fields;'
%}

</div>