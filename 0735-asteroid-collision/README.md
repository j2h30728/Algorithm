<h2><a href="https://leetcode.com/problems/asteroid-collision/">735. Asteroid Collision</a></h2><h3>Medium</h3><hr><div><p>We are given an array <code>asteroids</code> of integers representing asteroids in a row.<inliner class="im-inliner-dst-text" style="color: #239E23;"><br class="im-inliner-br-top" style="display:block;"> [소행성을 연속적으로 나타내는 정수로 구성된 소행성 배열이 제공됩니다.] <br class="im-inliner-br-bottom" style="display:none;"></inliner></p>

<p>For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left).<inliner class="im-inliner-dst-text" style="color: #239E23;"><br class="im-inliner-br-top" style="display:block;"> [각 소행성에 대해 절대값은 크기를 나타내고 부호는 방향을 나타냅니다(양수는 오른쪽, 음수는 왼쪽을 의미).] <br class="im-inliner-br-bottom" style="display:block;"></inliner> Each asteroid moves at the same speed.<inliner class="im-inliner-dst-text" style="color: #239E23;"><br class="im-inliner-br-top" style="display:block;"> [각 소행성은 같은 속도로 움직입니다.] <br class="im-inliner-br-bottom" style="display:none;"></inliner></p>

<p>Find out the state of the asteroids after all collisions.<inliner class="im-inliner-dst-text" style="color: #239E23;"><br class="im-inliner-br-top" style="display:block;"> [모든 충돌 후 소행성의 상태를 알아보세요.] <br class="im-inliner-br-bottom" style="display:block;"></inliner> If two asteroids meet, the smaller one will explode.<inliner class="im-inliner-dst-text" style="color: #239E23;"><br class="im-inliner-br-top" style="display:block;"> [두 소행성이 만나면 작은 소행성이 폭발합니다.] <br class="im-inliner-br-bottom" style="display:block;"></inliner> If both are the same size, both will explode.<inliner class="im-inliner-dst-text" style="color: #239E23;"><br class="im-inliner-br-top" style="display:block;"> [둘 다 같은 크기이면 둘 다 폭발합니다.] <br class="im-inliner-br-bottom" style="display:block;"></inliner> Two asteroids moving in the same direction will never meet.<inliner class="im-inliner-dst-text" style="color: #239E23;"><br class="im-inliner-br-top" style="display:block;"> [같은 방향으로 움직이는 두 소행성은 결코 만날 수 없습니다.] <br class="im-inliner-br-bottom" style="display:none;"></inliner></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> asteroids = [5,10,-5]
<strong>Output:</strong> [5,10]
<strong>Explanation:</strong> The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> asteroids = [8,-8]
<strong>Output:</strong> []
<strong>Explanation:</strong> The 8 and -8 collide exploding each other.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> asteroids = [10,2,-5]
<strong>Output:</strong> [10]
<strong>Explanation:</strong> The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= asteroids.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-1000 &lt;= asteroids[i] &lt;= 1000</code></li>
	<li><code>asteroids[i] != 0</code></li>
</ul>
</div>