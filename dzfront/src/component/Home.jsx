import React from 'react';
import '../css/Home.css';
function Home() {

    return (
        <div>
            <body class="welcome">
  <span id="splash-overlay" class="splash"></span>
  <span id="welcome" class="z-depth-4"></span>
 
  <header class="navbar-fixed"> 
    <nav class="row deep-purple darken-3">
      <div class="col s12">
        <ul class="right">
          <li class="right">
            <a href="" target="_blank" class="fa fa-facebook-square fa-2x waves-effect waves-light"><span class="icon-text"></span></a>
          </li>
          <li class="right">
            <a href="" target="_blank" class="fa fa-github-square fa-2x waves-effect waves-light"><span class="icon-text"></span></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <main class="valign-wrapper">
    <span class="container grey-text text-lighten-1 ">

      <p class="flow-text">/</p>
      <h1 class="title grey-text text-lighten-3">BIZ WARRIOR</h1>

      <blockquote class="flow-text"></blockquote>

      <div class="center-align">
     
      

      
        <ul id="exams" class="dropdown-content">
          <li>사업소득자등록</li>
          <li>사업소득자자료입력</li>
          <li>사업소득자조회</li>
        </ul>
  
      </div>

    </span>
  </main>

  <div class="fixed-action-btn">
    <a href="#message" class="modal-trigger btn btn-large btn-floating amber waves-effect waves-light">
      <i class="large material-icons">message</i>
    </a>
  </div>

  <div id="message" class="modal modal-fixed-footer">
    <div class="modal-content">
      <h4>Contact</h4>
      <p>coming soon...</p>
    </div>
    <div class="modal-footer">
      <a href="" class="modal-action modal-close waves-effect btn-flat">close</a>
    </div> 
  </div> 

  <footer class="page-footer deep-purple darken-3">
    <div class="footer-copyright deep-purple darken-4">
      <div class="container">
        <time datetime="{{ site.time | date: '%Y' }}">&copy; 2016 Jason</time>
      </div>
    </div>
  </footer>
</body>
        </div>
    );
}

export default Home;