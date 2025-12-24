import React, { useEffect, useState } from "react";

function DefaultLayout(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      class="bg-body homepage post-template"
    //   data-bs-spy="scroll"
    //   data-bs-target="#header-nav"
    //   tabindex="0"
    >
      <div class="container-fluid overflow-hidden ">
        <Navigation />

        <main class="col-lg-10 offset-lg-2">
          <div class="container">
            <div class="justify-content-center px-1 mx-1 px-xl-5 mx-xl-5">
                {props.children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
