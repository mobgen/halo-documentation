<div markdown="1">

{% include ios_sample_code.html id='tags'
swift-content='open func tags(_ tags: [Halo.Tag]) -> Halo.SearchQuery'
objc-content='- (HaloSearchQuery * _Nonnull)tags:(NSArray<HaloTag *> * _Nonnull)tags;'
%}

The tags will need to be provided as the existing model in the SDK:

{% include ios_sample_code.html id='tags-sample'
swift-content='let tag1 = Tag(name: "brand", value: "Lamborghini")
let tag2 = Tag(name: "colour", value: "red")
let query = SearchQuery().tags([tag1, tag2])'
objc-content='HaloTag *tag1 = [[HaloTag alloc] initWithName:@"brand" value:@"Lamborghini" type:nil];
HaloTag *tag2 = [[HaloTag alloc] initWithName:@"colour" value:@"red" type:nil];
HaloSearchQuery *query = [[HaloSearchQuery new] tags:@[tag1, tag2]];'
%}
</div>