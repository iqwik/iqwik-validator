<h1>Form iQwik Validator Plugin</h1>

<h3>Prerequisites</h3>
<p>jQuery <a href="http://jquery.com/download/" rel="nofollow">http://jquery.com/download/</a></p>

<h3>Live Example</h3>
<p><a href="https://iqwik.github.io/iqwik-validator/" rel="nofollow">Live example</a></p>

<h3>Usage</h3>
<pre><code>$('#form').iqwikValidator();</code></pre>

<h3>Data-Attributes</h3>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>data-req</strong></td>
      <td>Boolean</td>
      <td>True / False (true = required; false = none)</td>
    </tr>
    <tr>
      <td><strong>data-type</strong></td>
      <td>String</td>
      <td>text, name, phone, email (default type = text) for type of validation</td>
    </tr>
    <tr>
      <td><strong>data-err-text</strong></td>
      <td>String</td>
      <td>Your error text</td>
    </tr>
  </tbody>
</table>

<h3>Parameters (Patterns)</h3>
<p>You may change default patterns for custom check fields</p>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Pattern</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>text</strong></td>
      <td>/^([\w|\d]|\s){2,}$/i</td>
    </tr>
    <tr>
      <td><strong>name</strong></td>
      <td>/^[а-яА-ЯёЁa-zA-Z]{2,}$/i</td>
    </tr>      
    <tr>
      <td><strong>phone</strong></td>
      <td>/^\+7[-]\d{3}[-]\d{3}[-]\d{4}$/</td>
    </tr>
    <tr>
      <td><strong>email</strong></td>
      <td>/^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.(org|com|co|net|io|ru)$/i</td>
    </tr>
  </tbody>
</table>
<p>example</p>
<pre><code>$('#form').iqwikValidator({text: /^([\w|\d]|\s){3,}$/i});</code></pre>
