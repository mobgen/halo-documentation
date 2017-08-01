<div markdown="1">
Instead of specifying which fields will be populated, there is a shortcut that will cause all the fields representing a relationship to be populated.

{% include ios_sample_code.html id='populate-all'
swift-content='open func populateAll() -> Halo.SearchQuery'
objc-content='- (HaloSearchQuery * _Nonnull)populateAll;'
%}

**Note:** This will only cause the population of the first-level relationships. There is no direct way of getting deep population with just one request and it would need to be done manually.
</div>