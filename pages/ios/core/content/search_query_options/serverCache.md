<div markdown="1">
By specifying a value, it will allow the server to cache the results of the specific search for the provided amount of seconds. By default, this value will be `0` and the search results will not be cached.

{% include ios_sample_code.html id='server-cache'
swift-content='open func serverCache(seconds: Int) -> Halo.SearchQuery'
objc-content='- (HaloSearchQuery * _Nonnull)serverCache:(NSInteger)seconds;'
%}
</div>