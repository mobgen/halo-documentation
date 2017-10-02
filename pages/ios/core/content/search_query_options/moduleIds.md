<div markdown="1">
The same way we can specify the instance identifiers, we can also use the identifier from the modules we want to retrieve the instances from. It can be provided as a collection of identifiers, so that the result will only contain instances belonging to those modules.

{% include ios_sample_code.html id='module-ids'
swift-content='open func moduleIds(_ ids: [String]) -> Halo.SearchQuery'
objc-content='- (HaloSearchQuery * _Nonnull)moduleIds:(NSArray<NSString *> * _Nonnull)ids;'
%}
</div>