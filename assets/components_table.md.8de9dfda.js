import{o as n,c as a,a as s}from"./app.9e1f3eef.js";const t='{"title":"Table 表格组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":3,"title":"基础用法","slug":"基础用法"},{"level":3,"title":"useTable","slug":"usetable"},{"level":2,"title":"Table 属性","slug":"table-属性"},{"level":3,"title":"Columns","slug":"columns"},{"level":3,"title":"Pagination","slug":"pagination"},{"level":2,"title":"Table 方法","slug":"table-方法"}],"relativePath":"components/table.md","lastUpdated":1709192318733}',p={},o=s('<h1 id="table-表格组件"><a class="header-anchor" href="#table-表格组件" aria-hidden="true">#</a> Table 表格组件</h1><p>对 <code>element-plus</code> 的 <code>Table</code> 组件进行封装，只需传入 <code>columns</code> 与 <code>data</code> 参数，即可渲染出响应的表格出来。</p><p>Table 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Table" target="_blank" rel="noopener noreferrer">src/components/Table</a> 内</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>推荐使用 tsx 来使用 <code>Table</code> 组件。</p></div><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><h3 id="基础用法"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Table<span class="token punctuation">,</span> TableColumn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Table&#39;</span>\n\n<span class="token keyword">const</span> columns <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>TableColumn<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;title&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;author&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token string">&#39;title1&#39;</span><span class="token punctuation">,</span>\n    author<span class="token operator">:</span> <span class="token string">&#39;author1&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token string">&#39;title2&#39;</span><span class="token punctuation">,</span>\n    author<span class="token operator">:</span> <span class="token string">&#39;author2&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token string">&#39;title3&#39;</span><span class="token punctuation">,</span>\n    author<span class="token operator">:</span> <span class="token string">&#39;author3&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h3 id="usetable"><a class="header-anchor" href="#usetable" aria-hidden="true">#</a> useTable</h3><p>推荐配合 <code>useTable</code> 来使用</p><p>复杂点的例子，请<a href="https://element-plus-admin.cn/#/components/table/use-table" target="_blank" rel="noopener noreferrer">在线预览</a></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tsx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ContentWrap <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/ContentWrap&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useI18n&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Table<span class="token punctuation">,</span> TableColumn<span class="token punctuation">,</span> TableSlotDefault <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Table&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getTreeTableListApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/table&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ElTag<span class="token punctuation">,</span> ElButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useTable&#39;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> tableRegister<span class="token punctuation">,</span> tableState <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function-variable function">fetchDataApi</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> currentPage<span class="token punctuation">,</span> pageSize <span class="token punctuation">}</span> <span class="token operator">=</span> tableState\n    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getTreeTableListApi</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      pageIndex<span class="token operator">:</span> <span class="token function">unref</span><span class="token punctuation">(</span>currentPage<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      pageSize<span class="token operator">:</span> <span class="token function">unref</span><span class="token punctuation">(</span>pageSize<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      list<span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">,</span>\n      total<span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>total\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> dataList<span class="token punctuation">,</span> total<span class="token punctuation">,</span> currentPage<span class="token punctuation">,</span> pageSize <span class="token punctuation">}</span> <span class="token operator">=</span> tableState\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> columns <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>TableColumn<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;selection&#39;</span><span class="token punctuation">,</span>\n    type<span class="token operator">:</span> <span class="token string">&#39;selection&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    type<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;content&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.header&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        field<span class="token operator">:</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span>\n        label<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.title&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        field<span class="token operator">:</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span>\n        label<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.author&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        field<span class="token operator">:</span> <span class="token string">&#39;display_time&#39;</span><span class="token punctuation">,</span>\n        label<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.displayTime&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        field<span class="token operator">:</span> <span class="token string">&#39;importance&#39;</span><span class="token punctuation">,</span>\n        label<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.importance&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token operator">:</span> Recordable<span class="token punctuation">,</span> __<span class="token operator">:</span> TableColumn<span class="token punctuation">,</span> cellValue<span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>ElTag type<span class="token operator">=</span><span class="token punctuation">{</span>cellValue <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">:</span> cellValue <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">&#39;warning&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;danger&#39;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>\n              <span class="token punctuation">{</span>cellValue <span class="token operator">===</span> <span class="token number">1</span>\n                <span class="token operator">?</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.important&#39;</span><span class="token punctuation">)</span>\n                <span class="token operator">:</span> cellValue <span class="token operator">===</span> <span class="token number">2</span>\n                <span class="token operator">?</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.good&#39;</span><span class="token punctuation">)</span>\n                <span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.commonly&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            <span class="token operator">&lt;</span><span class="token operator">/</span>ElTag<span class="token operator">&gt;</span>\n          <span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        field<span class="token operator">:</span> <span class="token string">&#39;pageviews&#39;</span><span class="token punctuation">,</span>\n        label<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.pageviews&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;action&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.action&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    slots<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>ElButton type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">actionFn</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>\n            <span class="token punctuation">{</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.action&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>ElButton<span class="token operator">&gt;</span>\n        <span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">actionFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token operator">:</span> TableSlotDefault</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentWrap</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>`${t(<span class="token punctuation">&#39;</span>router.treeTable<span class="token punctuation">&#39;</span>)} ${t(<span class="token punctuation">&#39;</span>tableDemo.example<span class="token punctuation">&#39;</span>)}`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span>\n      <span class="token attr-name"><span class="token namespace">v-model:</span>pageSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pageSize<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name"><span class="token namespace">v-model:</span>currentPage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentPage<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataList<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">row-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">sortable</span>\n      <span class="token attr-name">:pagination</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n        total: total\n      }<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@register</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableRegister<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContentWrap</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span>\n    <span class="token attr-name"><span class="token namespace">v-model:</span>pageSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableObject.pageSize<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name"><span class="token namespace">v-model:</span>currentPage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableObject.currentPage<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableObject.tableList<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableObject.loading<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:pagination</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n      total: tableObject.total\n    }<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@register</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>register<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h4 id="参数介绍"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h4><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> tableRegister<span class="token punctuation">,</span> tableState<span class="token punctuation">,</span> tableMethods <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTable</span><span class="token punctuation">(</span>props<span class="token operator">:</span> UseTableConfig<span class="token punctuation">)</span>\n</code></pre></div><p><strong>props</strong></p><p>在使用 <code>useTable</code> 的时候，需要传入 <code>fetchDataApi</code>，为了保证可定制，需要自行在 <code>fetchDataApi</code> 中完成请求逻辑，之后返回结果 { list: Array, total?: number }，后续分页，就可以自动请求数据。</p><p>如果需要删除，同样需要传入 <code>fetchDelApi</code> ，返回一个 <code>Boolean</code> 来判断是否删除完成，后续 <code>useTable</code> 将自行刷新表格。</p><p><strong>tableRegister</strong></p><p><code>tableRegister</code> 用于注册 <code>useTable</code>，如果需要使用 <code>useTable</code> 提供的 <code>api</code>，必须将 <code>tableRegister</code> 传入组件的 <code>onRegister</code></p><p><strong>tableState</strong></p><p>表格状态</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>pageSize</td><td>每页显示多少条</td><td><code>number</code></td><td>-</td><td>10</td></tr><tr><td>currentPage</td><td>当前页</td><td><code>number</code></td><td>-</td><td>1</td></tr><tr><td>total</td><td>总条数</td><td><code>number</code></td><td>-</td><td>-</td></tr><tr><td>dataList</td><td>表格数据</td><td><code>any[]</code></td><td>-</td><td>[]</td></tr><tr><td>loading</td><td>表格是否加载中</td><td><code>boolean</code></td><td>-</td><td>false</td></tr></tbody></table><p><strong>tableMethods</strong></p><table><thead><tr><th>方法名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>setProps</td><td>用于表格组件属性</td><td>(props: Recordable) =&gt; void</td></tr><tr><td>getList</td><td>获取表格数据</td><td><code>() =&gt; Promise&lt;void&gt;</code></td></tr><tr><td>setColumn</td><td>设置表头结构</td><td>(columnProps: TableSetProps[]) =&gt; void</td></tr><tr><td>addColumn</td><td>新增表头结构</td><td>(tableColumn: TableColumn, index?: number) =&gt; void</td></tr><tr><td>delColumn</td><td>删除表头结构</td><td>(field: string) =&gt; void</td></tr><tr><td>getElTableExpose</td><td>获取 ElTable 实例</td><td><code>() =&gt; Promise&lt;typeof ElTable&gt;</code></td></tr><tr><td>refresh</td><td>刷新表格</td><td>() =&gt; void</td></tr><tr><td>delList</td><td>删除数据</td><td><code>(idsLength: number) =&gt; Promise&lt;void&gt;</code></td></tr></tbody></table><h2 id="table-属性"><a class="header-anchor" href="#table-属性" aria-hidden="true">#</a> Table 属性</h2><p>除以下参数外，还支持 <code>element-plus</code> 的 <code>Table</code> 所有属性，<a href="https://element-plus.org/zh-CN/component/table.html#table-attributes" target="_blank" rel="noopener noreferrer">详见</a></p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>pageSize</td><td>每页显示多少条，支持 v-model 双向绑定</td><td><code>number</code></td><td>-</td><td>10</td></tr><tr><td>currentPage</td><td>当前页，支持 v-model 双向绑定</td><td><code>number</code></td><td>-</td><td>1</td></tr><tr><td>selection</td><td>是否多选</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>showOverflowTooltip</td><td>是否所有的超出隐藏，优先级低于 schema 中的 showOverflowTooltip</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>columns</td><td>表头结构，<a href="#Columns">详见</a></td><td><code>TableColumn[]</code></td><td>-</td><td>[]</td></tr><tr><td>expand</td><td>是否显示展开行</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>pagination</td><td>是否展示分页，<a href="#Pagination">详见</a></td><td><code>Pagination</code>/<code>undefined</code></td><td>-</td><td>-</td></tr><tr><td>reserveSelection</td><td>仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>loading</td><td>加载状态</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>reserveIndex</td><td>是否叠加索引</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>align</td><td>内容对齐方式</td><td><code>string</code></td><td><code>left</code>/<code>center</code>/<code>right</code></td><td>left</td></tr><tr><td>headerAlign</td><td>表头对齐方式</td><td><code>string</code></td><td><code>left</code>/<code>center</code>/<code>right</code></td><td>left</td></tr><tr><td>data</td><td>表格数据</td><td><code>Recordable[]</code></td><td>-</td><td>[]</td></tr><tr><td>showAction</td><td>是否显示表格操作</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>imagePreview</td><td>需要展示图片的字段</td><td><code>string[]</code></td><td>-</td><td>-</td></tr><tr><td>videoPreview</td><td>需要展示视频的字段</td><td><code>string[]</code></td><td>-</td><td>-</td></tr><tr><td>customContent</td><td>是否自定义内容</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>cardBodyStyle</td><td>卡片内容样式</td><td><code>CSSProperties</code></td><td>-</td><td>-</td></tr><tr><td>cardBodyClass</td><td>卡片内容类名</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>cardWrapStyle</td><td>卡片容器样式</td><td><code>CSSProperties</code></td><td>-</td><td>-</td></tr><tr><td>cardWrapClass</td><td>卡片容器类名</td><td><code>string</code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="columns"><a class="header-anchor" href="#columns" aria-hidden="true">#</a> Columns<span id="Columns"></span></h3><p>除了以下属性，还支持 <code>element-plus</code> 的 <code>TableColumn</code> 属性。</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>field</td><td>唯一值，如需展示正确的数据，需要与 data 中的属性名对应</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>label</td><td>表头名称</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>hidden</td><td>是否隐藏</td><td><code>boolean</code></td><td>-</td><td>-</td></tr><tr><td>slots</td><td>插槽对象</td><td><code>object</code></td><td>-</td><td>-</td></tr><tr><td>children</td><td>子项，用于多级表头</td><td><code>TableColumn[]</code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="pagination"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination<span id="Pagination"></span></h3><p>支持 <code>element-plus</code> 的 <code>Pagination</code> 所有属性，<a href="https://element-plus.org/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">详见</a></p><h2 id="table-方法"><a class="header-anchor" href="#table-方法" aria-hidden="true">#</a> Table 方法</h2><table><thead><tr><th>方法名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>setProps</td><td>用于设置表格属性</td><td>(props: Recordable) =&gt; void</td></tr><tr><td>setColumn</td><td>用于修改表头结构</td><td>(columnProps: TableSetPropsType[]) =&gt; void</td></tr><tr><td>addColumn</td><td>新增表头结构</td><td>(tableColumn: TableColumn, index?: number) =&gt; void</td></tr><tr><td>delColumn</td><td>删除表头结构</td><td>(field: string) =&gt; void</td></tr></tbody></table>',33);p.render=function(s,t,p,e,c,l){return n(),a("div",null,[o])};export default p;export{t as __pageData};
