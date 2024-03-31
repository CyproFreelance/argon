import React from "react";
import styles from "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer-left">
          <div class="company-header">Argon Software</div>
          <p class="company-paragraph">
            Providing Budget game enhancement solutions since 2022.
          </p>

          <div class="social-icons">
            <a href="https://discord.gg/argons" target="_blank">
              <img src="https://argon-one.vercel.app/image-23.webp" alt="" />
            </a>
            <a
              href="https://www.tiktok.com/@argonsoftware_?_t=8i5rhNfEOsi&_r=1"
              target="_blank"
            >
              <img src="https://argon-one.vercel.app/image-26.webp" alt="" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCEKVg-Ysak6-DxlcHB1SEbg"
              target="_blank"
            >
              <img src="https://argon-one.vercel.app/image-25.webp" alt="" />
            </a>
          </div>

          <p class="copyright">
            Developed & Designed by{" "}
            <a href="https://proxyxdz.netlify.app/">Proxy</a>. All rights
            reserved.
          </p>
        </div>

        <div class="footer-center">
          <div class="column">
            <div class="column-header">Contact Us</div>
            <ul>
              <li class="footitem">
                <a href="https://discord.gg/argons" target="_blank">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-right">
          <div class="footer-right-column">
            <div class="column-header">Social Media</div>
            <ul>
              <li class="footitem">
                <a
                  href="https://www.youtube.com/channel/UCEKVg-Ysak6-DxlcHB1SEbg"
                  target="_blank"
                >
                  Youtube
                </a>
              </li>
              <li class="footitem">
                <a
                  href="https://www.tiktok.com/@argonsoftware_?_t=8i5rhNfEOsi&_r=1"
                  target="_blank"
                >
                  Tiktok
                </a>
              </li>
            </ul>
          </div>
          <p class="copyrightmobile">
            Developed & Designed by{" "}
            <a href="https://proxyxdz.netlify.app/">Proxy</a>. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
