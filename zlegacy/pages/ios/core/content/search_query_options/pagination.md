<div markdown="1">
By default, the search results will be paginated. The page to be retrieved and its size can be specified through this property of the `SearchQuery`.

{% include ios_sample_code.html id='pagination'
swift-content='open func pagination(page: Int, limit: Int) -> Halo.SearchQuery'
objc-content='- (HaloSearchQuery * _Nonnull)paginationWithPage:(NSInteger)page limit:(NSInteger)limit;'
%}
</div>