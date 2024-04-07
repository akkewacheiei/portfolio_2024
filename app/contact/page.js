"use client";
import Contact from "../../components/Contact/index";

export default function Page() {
  return (
    <div className="bg-white pt-[100px]">
      <Contact />
      <div class="mdl-cell mdl-cell--6-col">
        <h2>Contact Me</h2>
        <div class="contact-list">
          <ul class="mdl-list">
            <li class="mdl-list__item">
              <span
                class="mdl-list__item-primary-content"
          
              >
                <span>
                  <i class="fa fa-phone-square" aria-hidden="true"></i>
                  084-004-5946
                </span>
              </span>
            </li>
            <li class="mdl-list__item">
              <span
                class="mdl-list__item-primary-content"
              >
                <span>
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  akkewach.yodsomboon@gmail.com
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
