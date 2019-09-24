<h1>Form iQwik Validator Plugin</h1>

<h3>Prerequisites</h3>
<p>jQuery <a href="http://jquery.com/download/" rel="nofollow" target="_blank">http://jquery.com/download/</a></p>
<pre><code><script type="text/javascript" src="./js/iqwik-validator.min.js"></script></code></pre>

<h3>Live Example</h3>
<p><a href="https://iqwik.github.io/iqwik-validator/" rel="nofollow" target="_blank">Live example</a></p>

<h3>Usage</h3>
<p>Add data-attributes to fields<br/>example:</p>
<pre>
<code>
   &lt;input type="text" data-req="true" data-err-text="Field is required"&gt;   
   &lt;input type="text" data-req="true" data-type="name" data-err-text="Name is required"&gt;   
   &lt;input type="text" data-req="true" data-type="phone" data-err-text="Phone is required"&gt;   
   &lt;input type="text" data-req="true" data-type="email" data-err-text="E-mail is required"&gt;
<br/>
   $('#form').iqwikValidator();
</code>
</pre>

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
      <td>true => required</td>
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
    <tr>
      <td><strong>data-err-class</strong></td>
      <td>String</td>
      <td>attribute "name"</td>
    </tr>
  </tbody>
</table>

<h3>Parameters (&& Patterns)</h3>
<p>You may change default patterns</p>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Pattern/Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>text</strong></td>
      <td>/^([\S]{1,}).+/i</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>name</strong></td>
      <td>/^[а-яА-ЯёЁa-zA-Z]{2,}$/i</td>
      <td></td>
    </tr>      
    <tr>
      <td><strong>phone</strong></td>
      <td>/^\+7[-]\d{3}[-]\d{3}[-]\d{4}$/</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>email</strong></td>
      <td>/^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.(org|com|co|net|io|ru)$/i</td>
      <td></td>
    </tr>
     <tr>
      <td><strong>errorClass</strong></td>
      <td>Boolean</td>
      <td>change default selector for error class (default => true)</td>
     </tr>
     <tr>
      <td><strong>onSubmit</strong></td>
      <td>Fuction</td>
      <td>add event on submit form</td>
    </tr>
  </tbody>
</table>
<p>example:</p>
<pre><code>
   $('#form').iqwikValidator({
      text: /^([\w|\d]|\s){3,}$/i, 
      errorClass: false,
      onSubmit: function(e){
        alert($(e).serialize());
    }
   });
            </code></pre>
