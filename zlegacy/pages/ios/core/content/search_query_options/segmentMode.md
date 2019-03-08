<div markdown="1">
When adding tags for segmentation (see `tags` below), using this property will allow to specify whether the segmentation has to be `total` (the instance must be tagged with **all** the tags) or `partial` (as long as any of the tags of the instance matches the ones provided, it will be included in the search results).

{% include ios_sample_code.html id='segment-mode' 
swift-content='public enum SegmentMode: Int {
   case total, partial
}

open func segmentMode(_ mode: SegmentMode) -> Halo.SearchQuery'
objc-content='typedef SWIFT_ENUM_NAMED(NSInteger, HaloSegmentMode, "SegmentMode") {
  HaloSegmentModeTotal = 0,
  HaloSegmentModePartial = 1,
};

- (HaloSearchQuery * _Nonnull)segmentMode:(enum HaloSegmentMode)mode;'
%}
</div>