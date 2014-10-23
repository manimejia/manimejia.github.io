

{% for asset in page.assets %}
[ASSET{{forloop.index}}]: {{page_assetpath}}{{asset.filename}} "{{asset.caption}}"
{% endfor %}