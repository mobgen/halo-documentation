<div markdown="1">
When querying the instances belonging to a specific module, the module name can be used for a better understanding and a clearer code.

{% include ios_sample_code.html id='module-name'
swift-content= 'open func moduleName(_ name: String) -> Halo.SearchQuery'
objc-content='- (HaloSearchQuery * _Nonnull)moduleName:(NSString * _Nonnull)name;'
%}

**Note:** only one module name can be provided (not like the case of `moduleIds`), since the returned results will not contain any link to the module name (but only to the module id), so it would be impossible to tell which instances belong to which module if providing more than one module name was supported.
</div>