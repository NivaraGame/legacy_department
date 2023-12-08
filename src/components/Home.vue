<template>
  <div class="container grid w-100 mt-3">
    <div class="row">
      <div class="col-sm-12">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./images/img.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="./images/img_1.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="./images/img_2.png" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex">
    <div id="main">
      <div id="content">
        <div class="box">
          <h2><span>CATEGORY ONE</span></h2>
          <a href="#" class="see-all">See all articles in this category</a>
          <div class="cl">&nbsp;</div>
          <div class="posts">
            <div class="post">
              <div class="image"><a href="#"><img src="./images/post-1.jpg" alt=""/></a></div>
              <div class="data">
                <h4><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
                <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi bibendum luctus. </p>
              </div>
            </div>
            <div class="post last">
              <div class="image"><a href="#"><img src="./images/post-2.jpg" alt=""/></a></div>
              <div class="data">
                <h4><a href="#">Maecenas scelerisque sapien </a></h4>
                <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi bibendum luctus. </p>
              </div>
            </div>
            <div class="cl">&nbsp;</div>
            <div class="post">
              <div class="image"><a href="#"><img src="./images/post-3.jpg" alt=""/></a></div>
              <div class="data">
                <h4><a href="#">Cras ac ultrices ipsum. </a></h4>
                <p>Vivamus adipiscing dui at turpis imperdiet congue. Fusce posuere augue et odio bibendum non dictum
                  nisi
                  posuere. </p>
              </div>
            </div>
            <div class="post last">
              <div class="image"><a href="#"><img src="./images/post-4.jpg" alt=""/></a></div>
              <div class="data">
                <h4><a href="#">Nunc ac lorem id ipsum.</a></h4>
                <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi bibendum luctus. </p>
              </div>
            </div>
            <div class="cl">&nbsp;</div>
          </div>
        </div>
        <div class="box">
          <h2><span>CATEGORY TWO</span></h2>
          <a href="#" class="see-all">See all articles in this category</a>
          <div class="cl">&nbsp;</div>
          <div class="posts">
            <div class="post">
              <div class="image"><a href="#"><img src="./images/post-5.jpg" alt=""/></a></div>
              <div class="data">
                <h4><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
                <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi bibendum luctus. </p>
              </div>
            </div>
            <div class="post last">
              <div class="image"><a href="#"><img src="./images/post-6.jpg" alt=""/></a></div>
              <div class="data">
                <h4><a href="#">Maecenas scelerisque sapien </a></h4>
                <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi bibendum luctus. </p>
              </div>
            </div>
            <div class="cl">&nbsp;</div>
            <div class="post">
              <div class="image"><a href="#"><img src="./images/post-1.jpg" alt=""/></a></div>
              <div class="data">
                <h4><a href="#">Cras ac ultrices ipsum. </a></h4>
                <p>Vivamus adipiscing dui at turpis imperdiet congue. Fusce posuere augue et odio bibendum non dictum
                  nisi
                  posuere. </p>
              </div>
            </div>
            <div class="post last">
              <div class="image"><a href="#"><img src="./images/post-1.jpg" alt=""/></a></div>
              <div class="data">
                <h4><a href="#">Nunc ac lorem id ipsum.</a></h4>
                <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi bibendum luctus. </p>
              </div>
            </div>
            <div class="cl">&nbsp;</div>
          </div>
        </div>
        <div class="box last">
          <h2><span>CATEGORY THREE</span></h2>
          <a href="#" class="see-all">See all articles in this category</a>
          <div class="cl">&nbsp;</div>
          <div class="posts">
            <div class="post">
              <div class="image"><a href="#"><img src="./images/post-7.jpg" alt=""/></a></div>
              <div class="data">
                <h4><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
                <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi bibendum luctus. </p>
              </div>
            </div>
            <div class="post last">
              <div class="image"><a href="#"><img src="./images/post-8.jpg" alt=""/></a></div>
              <div class="data">
                <h4><a href="#">Maecenas scelerisque sapien </a></h4>
                <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi bibendum luctus. </p>
              </div>
            </div>
            <div class="cl">&nbsp;</div>
            <div class="post">
              <div class="image"><a href="#"><img src="./images/post-9.jpg" alt=""/></a></div>
              <div class="data">
                <h4><a href="#">Cras ac ultrices ipsum. </a></h4>
                <p>Vivamus adipiscing dui at turpis imperdiet congue. Fusce posuere augue et odio bibendum non dictum
                  nisi
                  posuere. </p>
              </div>
            </div>
            <div class="post last">
              <div class="image"><a href="#"><img src="./images/post-10.jpg" alt=""/></a></div>
              <div class="data">
                <h4><a href="#">Nunc ac lorem id ipsum.</a></h4>
                <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi bibendum luctus. </p>
              </div>
            </div>
            <div class="cl">&nbsp;</div>
          </div>
        </div>
        <div class="cl">&nbsp;</div>
      </div>
    </div>
    <div id="sidebar">
      <div class="nav-box">
        <h2><span>CATEGORIES</span></h2>
        <ul>
          <li><a href="#">Cras nec lorem lecturs</a></li>
          <li><a href="#">Nunc pell entesq</a></li>
          <li><a href="#">Lorem ipsum dolor</a></li>
          <li><a href="#">Amet sit laoreet</a></li>
          <li><a href="#">Lectus sit amet</a></li>
          <li><a href="#">Pellenstesuq nunc lorem</a></li>
        </ul>
      </div>
      <div class="nav-box">
        <h2><span>ARCHIVES</span></h2>
        <ul>
          <li><a href="#">August 2009</a></li>
          <li><a href="#">July 2009</a></li>
          <li><a href="#">June 2009</a></li>
          <li><a href="#">May 2009</a></li>
        </ul>
      </div>
      <div class="nav-box">
        <h2><span>TAGS</span></h2>
        <ul>
          <li><a href="#">Pellenstesque</a></li>
          <li><a href="#">Nunc lorem</a></li>
          <li><a href="#">Lectus sit</a></li>
          <li><a href="#">Sit laoreet</a></li>
          <li><a href="#">Sit amet</a></li>
          <li><a href="#">Laoreet lectus nunc</a></li>
        </ul>
      </div>
    </div>
    <div id="banners">
      <div class="banner"> <a href="#"><img src="./images/small-banner.gif" alt="" /></a> </div>
      <div class="banner"> <a href="#"><img src="./images/big-banner.gif" alt="" /></a> </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  outline: 0;
}

a {
  color: #0252aa;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}

a img {
  border: 0;
}

h2 {
  color: #fff;
  font-size: 14px;
  line-height: 16px;
}
h5 {
  font-size: 13px;
  line-height: 15px;
  padding-bottom: 2px;
}
.cl {
  display: block;
  height: 0;
  font-size: 0;
  line-height: 0;
  text-indent: -4000px;
  clear: both;
}

#header .top-bar {
  float: right;
}

#logo a {
  display: block;
  width: 250px;
  height: 63px;
  background: url(images/logo.gif);
  font-size: 0;
  line-height: 0;
  text-indent: -4000px;
}

#header .links {
  float: right;
  padding: 11px 0 8px 0;
}

#header .links a {
  float: left;
  color: #feffff;
  font-size: 9px;
  margin-left: 14px;
}

#navigation ul {
  list-style: none;
}

#navigation ul li {
  float: left;
  padding-right: 50px;
  height: 18px;
  line-height: 18px;
}

#navigation ul li a {
  color: #dbdbdb;
  font-size: 18px;
}

#navigation ul li a:hover, #navigation ul li a.active {
  color: #00ccff;
  text-decoration: none;
}

#main {
  background: #d7d7d7;
  padding: 10px 10px 4px 10px;
  height: 100%;
}

ul {
  list-style: none;
}

#main .box {
  /*background: #fff url(images/content-divider.gif) 297px top repeat-y;*/
  background: white;
  margin-bottom: 13px;
  padding: 0 15px 0 12px;
  height: 100%;
}

#content {
  float: left;
  width: 100%;
}

#content h2 {
  background: url(images/content-heading.gif) left top no-repeat;
  padding-left: 3px;
  position: relative;
  top: -3px;
  left: -11px;
  float: left;
}

#content h2 span {
  float: left;
  background: url(images/content-heading.gif) right top no-repeat;
  padding: 10px 13px 11px 4px;
}

#content .see-all {
  float: right;
  font-size: 12px;
  line-height: 14px;
  color: #00b1dd;
  text-decoration: underline;
  padding-top: 6px;
}

#content .see-all:hover {
  text-decoration: none;
}

#content .post {

  float: left;
  width: 333px;
  min-height: 76px;
  margin-right: 26px;
  padding: 5px 0 10px 0;
}

#content .post .image {
  float: left;
  border: 1px solid #d7d7d7;
  width: 74px;
}

#content .post .image img {
  border: 1px solid #fff;
}

#content .post .data {
  float: right;
  width: 186px;
  padding-top: 1px;
}

h4 {
  font-size: 13px;
  line-height: 13px;
  padding-bottom: 4px;
}

h4 a {
  color: #425969;
}

#content .post .data p {
  padding-left: 2px;
}

#sidebar {
  float: left;
  width: 197px;
  padding: 0 8px 0 10px;
}

#sidebar .nav-box {
  background-color: #fff;
}

#sidebar h2 {
  background: url(images/sidebar-heading.gif) top no-repeat;
  width: 205px;
  height: 35px;
  padding-bottom: 4px;
  margin: 0 -4px;
}

#sidebar h2 span {
  display: block;
  width: 194px;
  height: 14px;
  padding: 13px 0 8px 11px;
  cursor: pointer;
}

#sidebar h2 span {
  background: url(images/sidebar-h2-normal.gif) 185px 18px no-repeat;
}

#sidebar h2.minimized span {
  background-image: url(images/sidebar-h2-minimized.gif);
}

#sidebar ul li {
  display: block;
}

#sidebar ul li {
  border-bottom: 1px solid #e5e5e5;
  font-size: 12px;
  line-height: 14px;
  padding: 3px 0 5px;
}

#sidebar ul li a {
  display: block;
  color: #4f4f4f;
  text-decoration: none;
  padding-left: 16px;
  background: url(images/sidebar-bullet.gif) 6px center no-repeat;
}

#sidebar ul li a:hover {
  color: #1da9d7;
  background-image: url(images/sidebar-bullet-active.gif);
}

#banners {
  float: left;
}

.banner {
  border: 12px solid #fff;
  border-top-width: 13px;
  border-bottom-width: 13px;
  margin-bottom: 10px;
}


#bottom .box {
  float: left;
  margin-right: 11px;
  width: 436px;
}

#bottom .last {
  width: 517px;
}

#bottom .popular-posts li {
  padding: 0 0 13px 10px;
  background: url(images/bottom-border.gif) bottom repeat-x;
  margin-bottom: 13px;
}

#bottom .popular-posts .image {
  float: left;
  border: 3px solid #343333;
}

#bottom .popular-posts .data {
  float: right;
  width: 348px;
  padding-right: 9px;
}

#bottom .popular-posts .data p {
  font-size: 13px;
  line-height: 12px;
  color: #b7b7b7;
}

#bottom .latest-comments li {
  background: url(images/bottom-border.gif) bottom repeat-x;
  padding-bottom: 9px;
  margin-bottom: 5px;
  padding-left: 2px;
}

#bottom .latest-comments p {
  font-size: 12px;
  line-height: 12px;
  color: #b7b7b7;
  padding-left: 1px;
}

#bottom .see-all {
  color: #b7b7b7;
  float: right;
  text-decoration: none;
  border-bottom: 1px solid #64c5ff;
}

#bottom .see-all:hover {
  border-bottom: 0;
  margin-bottom: 1px;
}
 #footer a {
  color: #4a4a4a;
  background: #d7d7d7;
  text-decoration: none;
}

#footer a:hover {
  text-decoration: none;
}

#footer p {
  margin: 0;
  padding: 0;
  line-height: normal;
  white-space: nowrap;
  color: #4a4a4a;
}
</style>