<div ><h1>Traffic mixer</h1></div>

      <div id="aboutmecount">
			<h4>Abstract:</h4>
			Mix your data with the help with assistant devices
<br/>
<br/>
			<h4>Detail:</h4>
<p>	

	Several parts consist of this system
<ul>
	<li>
		<strong>Main Program(M):</strong> the program whose data is supposed to be mix within the traffic
	</li>
	<li>
		<strong>Client Proxy(CP):</strong> get the data from <strong>M</strong>, fomulate the mix strategy and command the <strong>AD</strong>
	</li>
	<li>
		<strong>Assistant Device(AD):</strong> get request from <strong>CP</strong> and send the data to <strong>TP</strong>
	</li>
	<li>
		<strong>Target Proxy(TP):</strong> collect data from <strong>M</strong> and <strong>ADs</strong>, generate the supposed origin data and trasmit it to <strong>T</strong>
	</li>
	<li>
		<strong>Target Program(T):</strong>  the target which <strong>M</strong> is going to communicate with
	</li>
</ul>

The following figure shows the structure
<br/>
<br/>
			<img src="images/mixStructure.png"/>

<br/>
<br/>
<h4>Tips</h4>

<h5>
1. How to tramsmit the data from a program to out proxy?
</h5>
Use a port forwarding tool like <i>SSH</i> or <i>iptable</i>. 
<br/>
<br/>

An easier solution is to use <i>rinetd</i>: one line configuration in /etc/rinetd.conf can do the job:
<pre>
[Source Address] [Source Port] [Destination Address] [Destination Port]
</pre>
See more on <a href="http://www.boutell.com/rinetd">http://www.boutell.com/rinetd</a>

<br/>
<br/>

<h5>
2. How to mix the data?
</h5>
This is the most tricky part: you can use whatever you want as long as you can encode them on the target proxy!
<br/>
One popular way may be trash string mixer, and the target proxy use XOR method with all the received message. 
<br/>
For example, you got the message "Hello" from M, let's list the process:
<br/>
&nbsp; a. Port-M -> portC1: "hello"
<br/>
&nbsp; b. portCP2 -> AD1: "hXXXX"
<br/>
&nbsp; c. portCP2 -> AD2: "XXllX"
<br/>
&nbsp; d. portCP2 -> portTP2: "XeXXo"
<br/>
&nbsp; e. TP do "hXXXX" XOR "XXllX" XOR "XeXXo" => "hello"
<br/>
&nbsp; f. portTP1 -> Port-T
<br/>


<br/>
<br/>

<h5>
3. What are the available assistant devices?
</h5>
Mobile devices like iPhone, nexus, pad are the best choice. I have two smart phones and an android-pad. If you do so, try it out.

      </div>

    
	<script src="displaydoc/dis_ini.js"></script>
