<div ><h1>Irrlicht Implementation: Game Role</h1></div>

      <div id="aboutmecount">

			<h4>Abstract:</h4>
			Use Irrlicht Engine to make a third perspective game role
<br/>
<br/>
			<h4>Detail:</h4>

<p>	
A game role is the node in the world which can run but stay at the center of the screen. There're, in a simple way, 3 steps to realize this:

<ul>
	<li>
		Get the signal of Keyboard	
	</li>
	<li>
		Move the role node, change its animation if needed
	</li>
	<li>
		Move the camera
	</li>
</ul>

This is based on the assumption that the coordinate of environment is static
</p>
<p>	
<h5>
1. Get the signal of keyboard
</h5>
Override the <i>IEventReceiver</i> class: maintain a keyboard table and set the status of each key (on\off), if the key is been pressing, set the status to 'on', and the main render program is going to get this. Refer this part from the tutorial 

		</p>
<p>	
<h5>
2. Move the role node and change its animation
</h5>
Since the node class <i>IAnimatedMeshSceneNode</i> is a abstruct class that cannot be inherited, I encapsulated all the method controlling the role into a delegate class <i>MyRoleDelegate</i>. The render() method of the class get the status of the keyboard from event-receiver and control the role.

</p>
<p>	
<h5>
3. Move the camera
</h5>

Get the position of the camera (constant related to the role position) in the main loop. 

</p>

<p>
The code is been migrating, check it on my Chinese blog (Just Ignore the Chinese Words) <a href="http://blog.csdn.net/u013802033/article/details/46790521">http://blog.csdn.net/u013802033/article/details/46790521</a>
</p>

<br/>
<br/>


			<h4>Parameter:</h4>
			<ul>
				<li><strong>Game Engine:</strong> Irrlicht 1.8.1</li>
				<li><strong>OS:</strong> Ubuntu 14.04 </li>
			</ul>

<br/>
<br/>


			<h4>Demo:</h4>
			<img src="images/irr/irr_role.gif"/>
			<br/>


      </div>
    
