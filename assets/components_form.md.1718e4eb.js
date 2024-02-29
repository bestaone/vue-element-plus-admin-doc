import{o as t,c as n,a as s}from"./app.9e1f3eef.js";const a='{"title":"Form 表单组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":3,"title":"基础用法","slug":"基础用法"},{"level":3,"title":"useForm","slug":"useform"},{"level":2,"title":"Form 属性","slug":"form-属性"},{"level":3,"title":"Schema","slug":"schema"},{"level":3,"title":"ComponentProps","slug":"componentprops"},{"level":3,"title":"FormItemProps","slug":"formitemprops"},{"level":2,"title":"Form 方法","slug":"form-方法"},{"level":2,"title":"如何新增表单子组件","slug":"如何新增表单子组件"}],"relativePath":"components/form.md","lastUpdated":1709192318729}',o={},e=s('<h1 id="form-表单组件"><a class="header-anchor" href="#form-表单组件" aria-hidden="true">#</a> Form 表单组件</h1><p>对 <code>element-plus</code> 的 <code>Form</code> 组件进行封装，支持 <code>element-plus</code> 的所有表单组件，并额外扩展了一些功能。</p><p>Form 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Form" target="_blank" rel="noopener noreferrer">src/components/Form</a> 内</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>推荐使用 tsx 来使用 <code>Form</code> 组件。</p></div><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>目前支持的表单组件，你可以在 <a href="https://element-plus-admin.cn/#/components/form/default-form" target="_blank" rel="noopener noreferrer">在线预览</a> 中看到。</p><h3 id="基础用法"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Form<span class="token punctuation">,</span> FormSchema <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Form&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> schema <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>FormSchema<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;field1&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span> <span class="token attr-name">:schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>schema<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h3 id="useform"><a class="header-anchor" href="#useform" aria-hidden="true">#</a> useForm</h3><p>对于复杂的场景，可以配合 <code>useForm</code> 来使用。</p><p>如果想看更复杂点的例子，请<a href="https://element-plus-admin.cn/#/components/form/use-form" target="_blank" rel="noopener noreferrer">在线预览</a></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tsx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Form<span class="token punctuation">,</span> FormSchema <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Form&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useForm&#39;</span>\n\n<span class="token keyword">const</span> schema <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>FormSchema<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;field1&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> formRegister <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span> <span class="token attr-name">:schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>schema<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@register</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formRegister<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h4 id="参数介绍"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h4><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> formRegister<span class="token punctuation">,</span> formMethods <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><p><strong>register</strong></p><p><code>formRegister</code> 用于注册 <code>useForm</code>，如果需要使用 <code>useForm</code> 提供的 <code>api</code>，必须将 <code>formRegister</code> 传入组件的 <code>onRegister</code></p><p><strong>formMethods</strong></p><table><thead><tr><th>方法名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>setValues</td><td>用于设置表单值</td><td>(data: Recordable) =&gt; void</td></tr><tr><td>setProps</td><td>用于设置表单属性</td><td>(props: Recordable) =&gt; void</td></tr><tr><td>delSchema</td><td>用于删除表单结构</td><td>(field: string) =&gt; void</td></tr><tr><td>addSchema</td><td>用于新增表单结构</td><td>(formSchema: FormSchema, index?: number) =&gt; void</td></tr><tr><td>setSchema</td><td>用于编辑表单结构</td><td>(schemaProps: FormSetPropsType[]) =&gt; void</td></tr><tr><td>getFormData</td><td>用于获取表单数据</td><td><code>&lt;T = Recordable&gt;() =&gt; Promise&lt;T&gt;</code></td></tr><tr><td>getComponentExpose</td><td>用于获取表单组件实例，如 ElInput 实例</td><td>(field: string) =&gt; any</td></tr><tr><td>getFormItemExpose</td><td>用于获取 formItem 组件实例</td><td><code>(field: string) =&gt; Promise&lt;ComponentRef&lt;typeof ElFormItem&gt;&gt;</code></td></tr><tr><td>getElFormExpose</td><td>用于获取 elForm 组件实例</td><td><code>(field: string) =&gt; Promise&lt;ComponentRef&lt;typeof ElForm&gt;&gt;</code></td></tr><tr><td>getFormExpose</td><td>用于获取二次封装的 Form 组件实例</td><td><code>() =&gt; Promise&lt;ComponentRef&lt;typeof Form&gt;&gt;</code></td></tr></tbody></table><h2 id="form-属性"><a class="header-anchor" href="#form-属性" aria-hidden="true">#</a> Form 属性<span id="Form"></span></h2><p>除以下参数外，还支持 <code>element-plus</code> 的 <code>Form</code> 所有属性，<a href="https://element-plus.org/zh-CN/component/form.html#form-%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">详见</a></p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>schema</td><td>生成 Form 的布局结构数组，<a href="#Schema">详见</a></td><td><code>FormSchema</code></td><td>-</td><td>[]</td></tr><tr><td>isCol</td><td>是否需要栅格布局</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>model</td><td>表单数据对象</td><td><code>Recordable</code></td><td>-</td><td>{}</td></tr><tr><td>autoSetPlaceholder</td><td>是否自动设置 placeholder</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>isCustom</td><td>是否自定义内容</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>labelWidth</td><td>表单 label 宽度</td><td><code>string</code>/<code>number</code></td><td>-</td><td>auto</td></tr></tbody></table><h3 id="schema"><a class="header-anchor" href="#schema" aria-hidden="true">#</a> Schema<span id="Schema"></span></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>field</td><td>唯一值，必填项</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>label</td><td>标题</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>colProps</td><td>element-plus 的 col 组件属性</td><td><code>ColProps</code></td><td>-</td><td>-</td></tr><tr><td>componentProps</td><td>表单组件子属性，<a href="#ComponentProps">详见</a></td><td><code>any</code></td><td>-</td><td>-</td></tr><tr><td>formItemProps</td><td>element-plus 的 form-item 组件属性，<a href="#FormItemProps">详见</a></td><td><code>FormItemProps</code></td><td>-</td><td>-</td></tr><tr><td>component</td><td>需要渲染的表单子组件</td><td><code>ComponentName</code></td><td>-</td><td>-</td></tr><tr><td>value</td><td>表单子组件初始值</td><td><code>any</code></td><td>-</td><td>-</td></tr><tr><td>hidden</td><td>表单子组件是否隐藏</td><td><code>boolean</code></td><td>-</td><td>-</td></tr><tr><td>remove</td><td>表单子组件是否隐藏，如果为true，会连同值一同删除，类似v-if</td><td><code>boolean</code></td><td>-</td><td>-</td></tr><tr><td>optionApi</td><td>加载 options 方法</td><td><code>() =&gt; Promise&lt;any&gt;</code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="componentprops"><a class="header-anchor" href="#componentprops" aria-hidden="true">#</a> ComponentProps<span id="ComponentProps"></span></h3><p>componentProps的类型有： <code>InputComponentProps</code> <code>AutocompleteComponentProps</code> <code>InputNumberComponentProps</code> <code>SelectComponentProps</code> <code>SelectV2ComponentProps</code> <code>CascaderComponentProps</code> <code>SwitchComponentProps</code> <code>RateComponentProps</code> <code>ColorPickerComponentProps</code> <code>TransferComponentProps</code> <code>RadioGroupComponentProps</code> <code>RadioButtonComponentProps</code> <code>DividerComponentProps</code> <code>DatePickerComponentProps</code> <code>DateTimePickerComponentProps</code> <code>TimePickerComponentProps</code> <code>InputPasswordComponentProps</code> <code>TreeSelectComponentProps</code> <code>UploadComponentProps</code> <code>any</code></p><p>基本上每个表单组件都有 <code>slots</code> 的插槽对象，用于自定义插槽，如 InputComponentProps ：</p><div class="language-ts"><pre><code>slots<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token operator">|</span> <span class="token keyword">null</span>\n  suffix<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token operator">|</span> <span class="token keyword">null</span>\n  prepend<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token operator">|</span> <span class="token keyword">null</span>\n  append<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token operator">|</span> <span class="token keyword">null</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>如果需要监听组件事件，如 change 事件，每个 <code>ComponentProps</code> 基本上都有 <code>on</code> 对象用来接收事件，如 InputComponentProps ：</p><div class="language-ts"><pre><code>on<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  blur<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> FocusEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n  focus<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> FocusEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n  change<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n  clear<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n  input<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n<span class="token punctuation">}</span>\n\n</code></pre></div><h3 id="formitemprops"><a class="header-anchor" href="#formitemprops" aria-hidden="true">#</a> FormItemProps<span id="FormItemProps"></span></h3><p>除了以下属性，还支持 <code>element-plus</code> 中的 <code>FormItem</code> 的所有属性</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>slots</td><td>FormItem的插槽</td><td><code>Object</code></td><td>-</td><td>-</td></tr><tr><td>style</td><td>子表单项的样式</td><td><code>CSSProperties</code></td><td>-</td><td>-</td></tr></tbody></table><h2 id="form-方法"><a class="header-anchor" href="#form-方法" aria-hidden="true">#</a> Form 方法</h2><table><thead><tr><th>方法名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>setValues</td><td>用于设置表单值</td><td>(data: Recordable) =&gt; void</td></tr><tr><td>setProps</td><td>用于设置表单属性</td><td>(props: Recordable) =&gt; void</td></tr><tr><td>delSchema</td><td>用于删除表单结构</td><td>(field: string) =&gt; void</td></tr><tr><td>addSchema</td><td>用于新增表单结构</td><td>(formSchema: FormSchema, index?: number) =&gt; void</td></tr><tr><td>setSchema</td><td>用于编辑表单结构</td><td>(schemaProps: FormSetPropsType[]) =&gt; void</td></tr><tr><td>getComponentExpose</td><td>用于获取表单子组件的实例，如 ElInput 实例</td><td>(field: string) =&gt; any</td></tr><tr><td>getFormItemExpose</td><td>用于获取 FormItem 组件的实例</td><td><code>() =&gt; Promise&lt;typeof FormItem&gt;</code></td></tr></tbody></table><h2 id="如何新增表单子组件"><a class="header-anchor" href="#如何新增表单子组件" aria-hidden="true">#</a> 如何新增表单子组件</h2><p>当项目中内置的表单组件不满足需求时，可以自行添加组件进去。</p><ol><li>在 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Form/src/types/index.ts" target="_blank" rel="noopener noreferrer">src/components/Form/src/types/index.ts</a> 的 <code>ComponentName</code> 添加你组件名称。</li><li>在 <a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/components/Form/src/helper/componentMap.ts" target="_blank" rel="noopener noreferrer">src/components/Form/src/helper/componentMap.ts</a> 引入你自己的组件，并在 <code>componentMap</code> 对象中添加键值对即可。</li><li>如果想要更好的类型提示，可以把自定义组件的类型也添加到 <code>componentProps</code></li></ol>',37);o.render=function(s,a,o,p,c,r){return t(),n("div",null,[e])};export default o;export{a as __pageData};
