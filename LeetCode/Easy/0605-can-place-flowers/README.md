<h2><a href="https://leetcode.com/problems/can-place-flowers/">605. Can Place Flowers</a></h2><h3>Easy</h3><hr><div><p>You have a long flowerbed in which some of the plots are planted, and some are not.<inliner class="im-inliner-dst-text" style="color: #239E23;"><br class="im-inliner-br-top" style="display:block;"> [당신은 일부 플롯이 심어지고 일부는 심어지지 않은 긴 화단이 있습니다.] <br class="im-inliner-br-bottom" style="display:block;"></inliner> However, flowers cannot be planted in <strong>adjacent</strong> plots.<inliner class="im-inliner-dst-text" style="color: #239E23;"><br class="im-inliner-br-top" style="display:block;"> [그러나 인접한 구획에는 꽃을 심을 수 없습니다.] <br class="im-inliner-br-bottom" style="display:none;"></inliner></p>

<p>Given an integer array <code>flowerbed</code> containing <code>0</code>'s and <code>1</code>'s, where <code>0</code> means empty and <code>1</code> means not empty, and an integer <code>n</code>, return <code>true</code>&nbsp;<em>if</em> <code>n</code> <em>new flowers can be planted in the</em> <code>flowerbed</code> <em>without violating the no-adjacent-flowers rule and</em> <code>false</code> <em>otherwise</em>.<inliner class="im-inliner-dst-text" style="color: #239E23;"><br class="im-inliner-br-top" style="display:block;"> [0과 1이 포함된 정수 배열 화단(0은 비어 있음을 의미하고 1은 비어 있지 않음을 의미)과 정수 n이 주어지면 인접 꽃 없음 규칙을 위반하지 않고 n개의 새 꽃을 화단에 심을 수 있으면 true를 반환하고, 그렇지 않으면 false를 반환합니다.] <br class="im-inliner-br-bottom" style="display:none;"></inliner></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> flowerbed = [1,0,0,0,1], n = 1
<strong>Output:</strong> true
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> flowerbed = [1,0,0,0,1], n = 2
<strong>Output:</strong> false
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= flowerbed.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>flowerbed[i]</code> is <code>0</code> or <code>1</code>.</li>
	<li>There are no two adjacent flowers in <code>flowerbed</code>.</li>
	<li><code>0 &lt;= n &lt;= flowerbed.length</code></li>
</ul>
</div>