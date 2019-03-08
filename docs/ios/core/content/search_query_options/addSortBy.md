<div markdown="1">
Adds a *sort by* criteria, sorting the results by any of the available metadata.

{% include ios_sample_code.html id='sort-by'
swift-content='public enum SortBy: Int {
    case name, createdAt, updatedAt, publishedAt, removedAt, archivedAt, deletedAt
}

public enum SortingOrder: Int {
    case ascending, descending
}

open func addSortBy(field: SortBy, order: SortingOrder) -> Halo.SearchQuery'
objc-content='typedef SWIFT_ENUM_NAMED(NSInteger, HaloSortBy, "SortBy") {
  HaloSortByName = 0,
  HaloSortByCreatedAt = 1,
  HaloSortByUpdatedAt = 2,
  HaloSortByPublishedAt = 3,
  HaloSortByRemovedAt = 4,
  HaloSortByArchivedAt = 5,
  HaloSortByDeletedAt = 6,
};

typedef SWIFT_ENUM_NAMED(NSInteger, HaloSortingOrder, "SortingOrder") {
  HaloSortingOrderAscending = 0,
  HaloSortingOrderDescending = 1,
};

- (HaloSearchQuery * _Nonnull)addSortByField:(enum HaloSortBy)field order:(enum HaloSortingOrder)order;'
%}

The calls can be conveniently chained so that the results can be sorted by several rules.

{% include ios_sample_code.html id='sort-by-sample'
swift-content='let query = SearchQuery().addSortBy(field: .createdAt, order: .ascending).addSortBy(field: .updatedAt, order: .ascending)'
objc-content='HaloSearchQuery *query = [HaloSearchQuery new];
query = [[query addSortByField:HaloSortByCreatedAt order:HaloSortingOrderAscending]
	addSortByField:HaloSortByUpdatedAt order:HaloSortingOrderAscending];'
%}

</div>