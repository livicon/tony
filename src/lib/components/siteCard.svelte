<script>
export let show
</script>

<div class="grid grid-cols-3 w-auto bg-white rounded-xl shadow-b-sm mx-28 my-3 h-40">
    <div class="grid grid-cols-3 h-full">
        <div class="h-full">
            <img
            src="/images/nikhil-mitra-gssCjrDR5Y4-unsplash.jpg"
            alt="airport"
            class="h-28 inline-block w-28 object-cover rounded-xl m-5"
          />
        </div>
        <div class="col-span-2 h-auto flex flex-col gap-1 text-center my-4 p-2
        justify-center">
            <h3 class=" text-lg font-bold">first shop</h3>
            <h6>first shop</h6>
            <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="102.558" height="19.508" viewBox="0 0 102.558 19.508" >
                <g id="rate" transform="translate(-1563.342 -895)">
                  <path
                    id="Path_316"
                    data-name="Path 316"
                    d="M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"
                    transform="translate(1644.654 895)"
                    fill="#ffcb14"
                  />
                  <path
                    id="Path_315"
                    data-name="Path 315"
                    d="M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"
                    transform="translate(1624.143 895)"
                    fill="#ffcb14"
                  />
                  <path
                    id="Path_314"
                    data-name="Path 314"
                    d="M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"
                    transform="translate(1603.631 895)"
                    fill="#ffcb14"
                  />
                  <path
                    id="Path_313"
                    data-name="Path 313"
                    d="M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"
                    transform="translate(1583.12 895)"
                    fill="#ffcb14"
                  />
                  <path
                    id="Path_312"
                    data-name="Path 312"
                    d="M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"
                    transform="translate(1562.607 895)"
                    fill="#ffcb14"
                  />
                </g>
              </svg>
        </div>
    </div>
    <div class="grid h-full grid-cols-3 col-span-2">
        <div class="flex flex-col gap-1 justify-center">
            <h3 class="text-xl font-bold  text-pink-600">120000t</h3>
            {#if show==true}
            <h6>120000t</h6>
            <h6>120000t</h6>    
            {/if}
            
        </div>
        <div class="mt-8 font-bold text-lg text-blue">
            <h3>show</h3>
        </div>
        <div class="mt-8">
            <button class="font-bold text-lg bg-blue text-white w-40 h-12 rounded-xl"> bay</button>
        </div>
    </div>
</div>
