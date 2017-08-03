<div markdown="1">
The search results can be filtered by the meta-properties (creation date, deletion date, etc) by providing a `SearchFilter` (will be detailed in the next section) with the desired parameters.

{% include ios_sample_code.html id='meta-filter'
swift-content='open func metaFilter(_ filter: SearchFilter) -> Halo.SearchQuery'
objc-content='- (HaloSearchQuery * _Nonnull)metaFilter:(HaloSearchFilter * _Nonnull)filter;'
%}
</div>