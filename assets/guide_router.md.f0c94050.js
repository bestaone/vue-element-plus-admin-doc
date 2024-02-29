import{o as n,c as s,a}from"./app.9e1f3eef.js";const t='{"title":"路由","description":"","frontmatter":{},"headers":[{"level":2,"title":"配置","slug":"配置"},{"level":3,"title":"如何添加新配置","slug":"如何添加新配置"},{"level":3,"title":"多级路由","slug":"多级路由"},{"level":3,"title":"外链","slug":"外链"},{"level":2,"title":"图标","slug":"图标"},{"level":2,"title":"多标签页","slug":"多标签页"},{"level":3,"title":"如何开启页面缓存","slug":"如何开启页面缓存"},{"level":3,"title":"如何让某个页面不缓存","slug":"如何让某个页面不缓存"},{"level":2,"title":"默认跳转地址","slug":"默认跳转地址"}],"relativePath":"guide/router.md","lastUpdated":1709192318733}',p={},o=a('<h1 id="路由"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h1><p>项目路由配置存放于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/router/index.ts" target="_blank" rel="noopener noreferrer">src/router/index.ts</a> 中。</p><p>为了方便阅读和查找，目前项目中并没有去对路由进行拆分，而是统一写在了一起，如果需要拆分，可自行更改。</p><p>因为路由是生成菜单关键，所以本项目中对路由提供了以下配置，方便开发者进行定制。</p><h2 id="配置"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-js"><pre><code><span class="token comment">/**\n* redirect: noredirect        当设置 noredirect 的时候该路由在面包屑导航中不可被点击\n* name:&#39;router-name&#39;          设定路由的名字，一定要填写不然使用&lt;keep-alive&gt;时会出现各种问题\n* meta : {\n    hidden: true              当设置 true 的时候该路由不会再侧边栏出现 如404，login等页面(默认 false)\n\n    alwaysShow: true          当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式，\n                              只有一个时，会将那个子路由当做根路由显示在侧边栏，\n                              若你想不管路由下面的 children 声明的个数都显示你的根路由，\n                              你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，\n                              一直显示根路由(默认 false)\n\n    title: &#39;title&#39;            设置该路由在侧边栏和面包屑中展示的名字\n\n    icon: &#39;svg-name&#39;          设置该路由的图标\n\n    noCache: true             如果设置为true，则不会被 &lt;keep-alive&gt; 缓存(默认 false)\n\n    breadcrumb: false         如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)\n\n    affix: true               如果设置为true，则会一直固定在tag项中(默认 false)\n\n    noTagsView: true          如果设置为true，则不会出现在tag中(默认 false)\n\n    activeMenu: &#39;/dashboard&#39;  显示高亮的路由路径\n\n    canTo: true               设置为true即使hidden为true，也依然可以进行路由跳转(默认 false)\n\n    permission: [&#39;edit&#39;,&#39;add&#39;, &#39;delete&#39;]    设置该路由的权限\n  }\n**/</span>\n</code></pre></div><h3 id="如何添加新配置"><a class="header-anchor" href="#如何添加新配置" aria-hidden="true">#</a> 如何添加新配置</h3><p>如果本项目中的路由配置项，满足不了你当前的开发工作，可以自行添加新的属性。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>所有的路由项配置，都必须放在 <code>meta</code> 中。</p></div><p>在 <a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/types/router.d.ts" target="_blank" rel="noopener noreferrer">types/router.d.ts</a> 中添加对应的类型，之后就可以在路由中添加你需要的配置项了。</p><div class="language-ts"><pre><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;vue-router&#39;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>\n    hidden<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n    alwaysShow<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n    title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>\n    icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>\n    noCache<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n    breadcrumb<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n    affix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n    activeMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>\n    noTagsView<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n    canTo<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n    permission<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token comment">// 添加新的配置类型</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre></div><h3 id="多级路由"><a class="header-anchor" href="#多级路由" aria-hidden="true">#</a> 多级路由</h3><div class="warning custom-block"><p class="custom-block-title">注意事项</p><ul><li>整个项目所有路由 <code>name</code> 不能重复</li><li>所有的多级路由最终都会转成二级路由，所以不能内嵌子路由</li><li>除了 layout 对应的 path 前面需要加 <code>/</code>，其余子路由都不要以<code>/</code>开头</li></ul></div><p><strong>示例</strong></p><div class="language-ts"><pre><code><span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">&#39;/level&#39;</span><span class="token punctuation">,</span>\n  component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>\n  redirect<span class="token operator">:</span> <span class="token string">&#39;/level/menu1/menu1-1/menu1-1-1&#39;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Level&#39;</span><span class="token punctuation">,</span>\n  meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;router.level&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    icon<span class="token operator">:</span> <span class="token string">&#39;carbon:skill-level-advanced&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  children<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;menu1&#39;</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token string">&#39;Menu1&#39;</span><span class="token punctuation">,</span>\n      component<span class="token operator">:</span> <span class="token function">getParentLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      redirect<span class="token operator">:</span> <span class="token string">&#39;/level/menu1/menu1-1/menu1-1-1&#39;</span><span class="token punctuation">,</span>\n      meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;router.menu1&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          path<span class="token operator">:</span> <span class="token string">&#39;menu1-1&#39;</span><span class="token punctuation">,</span>\n          name<span class="token operator">:</span> <span class="token string">&#39;Menu11&#39;</span><span class="token punctuation">,</span>\n          component<span class="token operator">:</span> <span class="token function">getParentLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          redirect<span class="token operator">:</span> <span class="token string">&#39;/level/menu1/menu1-1/menu1-1-1&#39;</span><span class="token punctuation">,</span>\n          meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;router.menu11&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            alwaysShow<span class="token operator">:</span> <span class="token boolean">true</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          children<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              path<span class="token operator">:</span> <span class="token string">&#39;menu1-1-1&#39;</span><span class="token punctuation">,</span>\n              name<span class="token operator">:</span> <span class="token string">&#39;Menu111&#39;</span><span class="token punctuation">,</span>\n              <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Level/Menu111.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n              meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;router.menu111&#39;</span><span class="token punctuation">)</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          path<span class="token operator">:</span> <span class="token string">&#39;menu1-2&#39;</span><span class="token punctuation">,</span>\n          name<span class="token operator">:</span> <span class="token string">&#39;Menu12&#39;</span><span class="token punctuation">,</span>\n          <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Level/Menu12.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;router.menu12&#39;</span><span class="token punctuation">)</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;menu2&#39;</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token string">&#39;Menu2Demo&#39;</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Level/Menu2.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;router.menu2&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n</code></pre></div><h3 id="外链"><a class="header-anchor" href="#外链" aria-hidden="true">#</a> 外链</h3><p>只需要将 <code>path</code> 设置为需要跳转的<strong>HTTP 地址</strong>即可。</p><div class="language-ts"><pre><code><span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">&#39;/external-link&#39;</span><span class="token punctuation">,</span>\n  component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>\n  meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;ExternalLink&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  children<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;https://github.com/kailong321200875/vue-element-plus-admin-doc&#39;</span><span class="token punctuation">,</span>\n      meta<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;Link&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;文档&#39;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="图标"><a class="header-anchor" href="#图标" aria-hidden="true">#</a> 图标</h2><p>这里的 <code>icon</code> 配置，会同步到 <strong>菜单</strong>（icon 的值可以查看<a href="./../components/icon.html">此处</a>）。</p><h2 id="多标签页"><a class="header-anchor" href="#多标签页" aria-hidden="true">#</a> 多标签页</h2><p>标签页使用的是 <code>keep-alive</code> 和 <code>router-view</code> 实现，实现切换 <code>tab</code> 后还能保存切换之前的状态。</p><h3 id="如何开启页面缓存"><a class="header-anchor" href="#如何开启页面缓存" aria-hidden="true">#</a> 如何开启页面缓存</h3><p>开启缓存有 2 个条件</p><ol><li>路由设置 <code>name</code>，且<strong>不能重复</strong></li><li>路由对应的组件加上 <code>name</code>，与路由设置的 <code>name</code> 保持一致</li></ol><div class="language-ts"><pre><code><span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">&#39;menu2&#39;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Menu2&#39;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Level/Menu2.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;router.menu2&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// /@/views/Level/Menu2.vue</span>\n<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>\n<span class="token function">defineOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Menu2&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n\n</code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>keep-alive 生效的前提是：需要将路由的 <code>name</code> 属性及对应的页面的 <code>name</code> 设置成一样。因为：</p><p><strong>include - 字符串或正则表达式，只有名称匹配的组件会被缓存</strong></p></div><h3 id="如何让某个页面不缓存"><a class="header-anchor" href="#如何让某个页面不缓存" aria-hidden="true">#</a> 如何让某个页面不缓存</h3><p>可以将 <code>noCache</code> 配置成 <code>true</code> 即可关闭缓存或者组件不添加 <code>name</code> 属性。</p><div class="language-ts"><pre><code><span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">&#39;workplace&#39;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Dashboard/Workplace.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Workplace&#39;</span><span class="token punctuation">,</span>\n  meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;router.workplace&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    noCache<span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="默认跳转地址"><a class="header-anchor" href="#默认跳转地址" aria-hidden="true">#</a> 默认跳转地址</h2><p>目前项目中，登录进来，默认是进入到当前第一个能找到的路由页面。</p><p>后续会考虑弄成一个配置项出来。</p>',33);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};
