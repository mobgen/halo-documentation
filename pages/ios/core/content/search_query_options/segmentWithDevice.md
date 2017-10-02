<div markdown="1">
If `segmentWithDevice` is set to `true`, the device tags (automatically added and provided by the SDK if enabled) will be added in order to filter the search results. If not specified, by default its value will be `false`.

{% include ios_sample_code.html id='segment-with-device'
swift-content='open func segmentWithDevice(_ segment: Bool) -> Halo.SearchQuery'
objc-content='- (HaloSearchQuery * _Nonnull)segmentWithDevice:(BOOL)segment;'
%}
</div>