import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <div class="footer">
      <div class="footer-content">
        <section class="footer-column popular-locations">
          <h2>Popular Locations</h2>
          <ul>
            <li><a href="/kolkata_g4157275">Kolkata</a></li>
            <li><a href="/mumbai_g4058997">Mumbai</a></li>
            <li><a href="/chennai_g4059162">Chennai</a></li>
            <li><a href="/pune_g4059014">Pune</a></li>
          </ul>
        </section>
        <section class="footer-column trending-locations">
          <h2>Trending Locations</h2>
          <ul>
            <li><a href="/bhubaneshwar_g4059049">Bhubaneshwar</a></li>
            <li><a href="/hyderabad_g4058526">Hyderabad</a></li>
            <li><a href="/chandigarh_g4058651">Chandigarh</a></li>
            <li><a href="/nashik_g4059002">Nashik</a></li>
          </ul>
        </section>
        <section class="footer-column about-us">
          <h2>About Us</h2>
          <ul>
            <li><a href="https://tech.olx.in/">Tech@OLX</a></li>
          </ul>
        </section>
        <section class="footer-column corporate-links">
          <h2>OLX</h2>
          <ul>
            <li><a href="https://www.olx.in/blog">Blog</a></li>
            <li><a href="https://help.olx.in/hc/en-us">Help</a></li>
            <li><a href="/sitemap/most-popular">Sitemap</a></li>
            <li><a href="https://help.olx.in/hc/en-us/categories/10781706981149-Legal-Privacy-information">Legal & Privacy Information</a></li>
            <li><a href="https://bugbase.ai/programs/olx">Vulnerability Disclosure Program</a></li>
          </ul>
        </section>
        <section class="footer-follow">
          <h2>Follow Us</h2>
          <div class="social-links">
            <a href="https://www.facebook.com/olxindia/" target="_blank" rel="noopener noreferrer">
            <svg width="30px" height="30px" fill='grey' viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
            <path class="rui-w4DG7" d="M697.376 565.332L719.489 410.898H581.163V310.679C581.163 268.429 600.485 227.246 662.442 227.246H725.334V95.7681C725.334 95.7681 668.257 85.3333 613.689 85.3333C499.764 85.3333 425.303 159.295 425.303 293.194V410.898H298.667V565.332H425.303V938.667H581.163V565.332H697.376V565.332Z"></path>
            </svg>
            </a>
            <a href="https://www.instagram.com/olx_india/" target="_blank" rel="noopener noreferrer">
            <svg width="30px" height="30px" fill='grey' viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
            <path class="rui-w4DG7" d="M511.979 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.605 0-426.667-191.019-426.667-426.667s191.061-426.667 426.667-426.667zM511.979 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429 199.637 0 361.429-161.792 361.429-361.429 0-199.595-161.792-361.387-361.429-361.387zM619.721 291.247c70.784 0 128.384 57.643 128.384 128.469v0 184.619c0 70.784-57.6 128.427-128.384 128.427v0h-215.424c-70.827 0-128.384-57.643-128.384-128.427v0-184.619c0-70.827 57.557-128.469 128.384-128.469v0zM619.721 335.791h-215.424c-46.293 0-83.883 37.632-83.883 83.925v0 184.619c0 46.293 37.589 83.925 83.883 83.925v0h215.424c46.251 0 83.883-37.632 83.883-83.925v0-184.619c0-46.293-37.632-83.925-83.883-83.925v0zM512.021 405.248c63.659 0 115.456 49.195 115.456 109.653 0 59.904-50.688 106.752-115.456 106.752-63.659 0-115.499-49.195-115.499-109.653 0-59.861 50.688-106.752 115.499-106.752zM512.021 444.885c-41.813 0-75.819 31.403-75.819 70.016 0 37.291 35.413 70.016 75.819 70.016s75.776-32.725 75.776-70.016c0-38.613-34.005-70.016-75.776-70.016zM630.857 358.852c23.296 0 43.008 19.712 43.008 43.008s-19.712 43.008-43.008 43.008c-23.296 0-43.008-19.712-43.008-43.008s19.712-43.008 43.008-43.008zM630.857 386.927c-8.661 0-15.019 6.272-15.019 14.933 0 8.704 6.357 14.976 15.019 14.976s14.976-6.272 14.976-14.976c0-8.661-6.315-14.933-14.976-14.933z"></path>
            </svg>
            </a>
            <a href="https://twitter.com/OLX_India" target="_blank" rel="noopener noreferrer">
            <svg width="30px" height="30px" fill='grey' viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
            <path class="rui-w4DG7" d="M927.74 266.064C908.72 274.497 888.977 281.151 868.718 285.968C891.041 264.755 907.825 238.222 917.294 208.607V208.607C919.997 200.152 910.814 192.841 903.179 197.368V197.368C874.995 214.085 844.637 226.626 812.945 234.647C811.106 235.112 809.209 235.348 807.306 235.348C801.533 235.348 795.921 233.205 791.506 229.315C757.788 199.597 714.421 183.23 669.396 183.23C649.914 183.23 630.243 186.267 610.929 192.257C551.089 210.817 504.917 260.178 490.43 321.079C484.996 343.922 483.524 366.785 486.054 389.034C486.344 391.59 485.135 393.375 484.39 394.212C483.082 395.679 481.226 396.52 479.3 396.52C479.085 396.52 478.864 396.509 478.645 396.489C347.656 384.319 229.536 321.212 146.043 218.796V218.796C141.786 213.572 133.621 214.212 130.228 220.033V220.033C113.877 248.084 105.237 280.166 105.237 312.812C105.237 362.843 125.338 409.992 160.252 444.364C145.57 440.883 131.359 435.4 118.158 428.068V428.068C111.772 424.52 103.914 429.08 103.824 436.385V436.385C102.91 510.71 146.425 576.845 211.613 606.625C210.3 606.656 208.987 606.671 207.672 606.671C197.339 606.671 186.877 605.673 176.579 603.705V603.705C169.387 602.332 163.345 609.154 165.578 616.127V616.127C186.737 682.185 243.614 730.876 311.677 741.932C255.189 779.852 189.406 799.854 120.94 799.854L99.5957 799.841C93.0193 799.841 87.4573 804.128 85.7814 810.498C84.1305 816.772 87.1713 823.39 92.7793 826.652C169.93 871.551 257.931 895.281 347.308 895.281C425.541 895.281 498.722 879.755 564.82 849.138C625.413 821.069 678.959 780.945 723.969 729.881C765.898 682.312 798.686 627.4 821.418 566.67C843.088 508.781 854.542 447.012 854.542 388.04V385.231C854.54 375.762 858.823 366.852 866.294 360.787C894.647 337.767 919.337 310.668 939.676 280.245V280.245C945.046 272.212 936.576 262.144 927.74 266.064V266.064Z"></path>
            </svg>
            </a>
            <a href="https://www.youtube.com/user/OLXInTv" target="_blank" rel="noopener noreferrer">
            <svg width="30px" height="30px" fill='grey' viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
            <path class="rui-w4DG7" d="M512 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.648 0-426.667-191.019-426.667-426.667s191.019-426.667 426.667-426.667zM512 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429s361.429-161.792 361.429-361.429c0-199.595-161.835-361.387-361.429-361.387zM382.605 321.86l311.125 190.123-311.125 190.165v-380.288z"></path>
            </svg>
            </a>
          </div>
        </section>
        <section class="footer-app-download">
          <h2>Download Our App</h2>
          <div class="app-links">
            <a href="https://play.google.com/store/apps/details?id=com.olx.southasia" target="_blank" rel="noopener noreferrer">
              <img src="https://statics.olx.in/external/base/img/playstore.png" style={{ width: '90px', height:"30px" }}  alt="Download on Play Store" />
            </a>
            <a href="https://itunes.apple.com/in/app/olx-buy-sell-near-you/id913492792?mt=8" target="_blank" rel="noopener noreferrer">
              <img src="https://statics.olx.in/external/base/img/appstore.png" style={{ width: '90px', height:"30px" }}  alt="Download on the App Store" />
            </a>
          </div>
        </section>
      </div>
    </div>
    </div>
  )
}

export default Footer
