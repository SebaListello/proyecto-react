
import React from 'react'
import BotonHamburguesa from './BotonHamburguesa'
import MenuMovil from './MenuMovil'
import ShoppingCart from './ShoppingCart'

const NavBar = () => {
  return (
<>
  <nav className='h-[10%] flex flex-row items-center justify-between md:justify-end'>
    <div className='flex items-center justify-center h-full mx-5'>
      <BotonHamburguesa/>
    </div>
    <div className='flex justify-center item-start md:w-screen md:absolute'>
      <svg className='md:w-[270px]' width="90%" height="auto" viewBox="0 0 1000 192" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M58.7909 107.177C56.7795 105.389 54.8195 103.644 52.8576 101.9C45.6025 95.453 38.3399 89.0094 31.107 82.547C30.5807 82.0763 30.1087 81.9857 29.355 82.0996C22.0282 83.2064 14.6964 84.2827 7.36467 85.3665C5.14314 85.6943 2.9216 86.024 0.700081 86.3519C0.514748 86.3789 0.322001 86.3887 0.0699486 86.4098C0.0699486 86.0105 0.0699486 85.6421 0.0699486 85.162C10.0779 83.6808 20.118 82.194 30.1581 80.709C30.7042 78.688 31.238 76.7417 31.7569 74.7921C33.4694 68.3737 35.1621 61.9537 36.9042 55.541C37.0624 54.9568 36.924 54.6443 36.3235 54.2797C24.8724 47.3139 13.4436 40.3286 2.0073 33.347C1.49825 33.0365 1.00403 32.7086 0.47521 32.4174C0.119371 32.2207 -0.0239531 31.9873 0.00322908 31.6537C0.0304112 31.3123 0.0106419 30.969 0.0106419 30.4599C0.475209 30.7338 0.776686 30.9054 1.07075 31.0848C13.0432 38.3883 25.0158 45.6936 36.9882 52.9992C37.0896 53.0609 37.2057 53.115 37.2922 53.1883C37.9273 53.738 38.7007 53.7534 39.5879 53.6647C43.2426 53.3019 46.9048 52.9895 50.5643 52.6579C54.2562 52.324 57.9481 51.9868 61.64 51.6549C65.2676 51.3289 68.8976 51.0071 72.5252 50.6812C74.5786 50.4959 76.6295 50.3068 78.73 50.1162C78.7671 49.8865 78.8167 49.6936 78.8267 49.4989C78.9181 47.4316 79.0095 45.362 79.0909 43.2947C79.2343 39.6109 79.3528 35.9274 79.5281 32.2458C79.5557 31.6653 79.3181 31.3471 78.7128 31.0231C65.93 24.2036 53.159 17.3687 40.3959 10.5261C39.8424 10.2292 39.3012 10.0749 38.6118 10.071C26.0635 9.99385 13.5177 9.89742 0.9719 9.80291C0.687724 9.801 0.403548 9.77979 0.0674781 9.7663C0.0674781 9.3613 0.0674781 8.99291 0.0674781 8.51077C12.9493 8.59949 25.8312 8.68434 38.8169 8.77115C38.1521 6.59569 37.5146 4.52054 36.8573 2.36825C37.4479 2.36825 37.9718 2.36825 38.5525 2.36825C39.0146 3.861 39.4767 5.3537 39.9363 6.84641C40.0944 7.36133 40.2625 7.87434 40.3934 8.39314C40.4997 8.81355 40.7715 9.099 41.2336 9.34393C44.7129 11.1838 48.1748 13.043 51.6419 14.8963C61.0295 19.9145 70.4224 24.9287 79.7976 29.9604C80.3909 30.2786 80.9614 30.4175 81.6781 30.3808C87.5495 30.0839 93.4233 29.8042 99.2971 29.5245C103.814 29.3086 108.334 29.1022 112.851 28.8901C113.106 28.8785 113.358 28.8592 113.716 28.838C113.667 28.5121 113.65 28.2189 113.57 27.9354C112.863 25.3646 111.757 22.8883 110.602 20.4255C109.738 18.578 108.801 16.7516 107.924 14.9098C107.719 14.4816 107.395 14.2059 106.883 13.9783C98.5657 10.2908 90.2581 6.5899 81.95 2.89092C81.6462 2.75592 81.3448 2.61513 80.9614 2.4396C81.4186 2.21397 81.8362 2.33739 82.2243 2.30077C83.5638 2.17735 84.7128 2.49942 85.879 3.02592C93.1567 6.30257 100.471 9.52908 107.766 12.7845C108.346 13.0449 108.927 13.1625 109.594 13.1722C115.577 13.2608 121.557 13.3669 127.537 13.4692C127.851 13.4749 128.167 13.4692 128.525 13.3997C125.763 11.5001 122.909 9.71419 120.079 7.90329C117.257 6.09814 114.428 4.29878 111.448 2.3972C111.843 2.35284 112.065 2.30656 112.29 2.3046C114.005 2.29881 115.718 2.2834 117.432 2.31427C117.9 2.32197 118.399 2.42032 118.819 2.58235C124.12 4.62663 129.452 6.62077 134.688 8.75957C148.26 14.3061 161.695 20.0495 174.755 26.3077C181.17 29.3818 187.57 32.4907 193.543 36.0876C199.115 39.4413 204.356 43.0669 208.836 47.3252C211.515 49.871 213.838 52.5944 215.469 55.6511C216.205 57.0301 216.737 58.4534 217.092 59.9207C217.157 60.1868 217.263 60.4609 217.436 60.6943C220.201 64.4278 221.896 68.4605 222.909 72.6786C223.833 76.5203 224.066 80.3947 223.653 84.2865C223.171 88.8109 221.909 93.206 219.855 97.4549C219.356 98.4865 219.232 99.5628 218.963 100.623C217.925 104.716 216.319 108.681 214.508 112.596C213.563 114.635 212.506 116.642 211.532 118.673C210.677 120.453 209.538 122.106 208.216 123.703C195.601 138.941 183.369 154.363 171.27 169.852C169.64 171.938 167.761 173.908 165.978 175.919C162.167 180.214 158.332 184.493 154.541 188.796C154.072 189.33 153.592 189.587 152.74 189.357C152.712 189.051 153.049 188.856 153.251 188.628C158.512 182.694 163.83 176.791 169.032 170.824C171.14 168.407 173.013 165.865 174.972 163.37C179.126 158.078 183.268 152.78 187.414 147.484C187.595 147.255 187.758 147.017 188.02 146.661C187.63 146.774 187.395 146.826 187.175 146.908C184.753 147.806 182.329 148.701 179.924 149.625C179.539 149.773 179.163 150.016 178.914 150.29C170.307 159.756 161.715 169.231 153.128 178.706C152.886 178.972 152.69 179.265 152.505 179.558C150.612 182.571 148.729 185.585 146.841 188.597C146.673 188.867 146.493 189.132 146.317 189.403C145.92 189.403 145.571 189.403 145.05 189.403C146.945 186.254 148.922 183.217 150.877 180.006C150.484 180.12 150.254 180.171 150.044 180.25C145.045 182.144 140.053 184.048 135.049 185.934C134.56 186.119 134.211 186.374 133.925 186.725C133.198 187.62 132.442 188.499 131.689 189.394C131.263 189.394 130.856 189.394 130.297 189.394C130.542 189.089 130.722 188.862 130.91 188.636C131.473 187.959 132 187.261 132.62 186.615C133.243 185.965 133.532 185.261 133.636 184.461C134.088 180.897 134.575 177.335 135.059 173.773C135.474 170.712 135.907 167.653 136.329 164.594C136.354 164.421 136.359 164.245 136.379 163.981C136.052 164.081 135.795 164.145 135.553 164.236C126.358 167.636 117.163 171.042 107.963 174.432C107.457 174.619 107.155 174.893 106.901 175.259C103.782 179.765 100.651 184.266 97.5252 188.767C97.009 189.51 97.0067 189.51 95.8029 189.334C95.9662 189.078 96.1143 188.833 96.2776 188.594C99.4305 184.046 102.569 179.491 105.757 174.959C106.221 174.297 106.335 173.661 106.236 172.935C105.86 170.17 105.179 167.447 104.331 164.753C102.9 160.199 101.358 155.667 99.8581 151.125C99.7867 150.911 99.6752 150.705 99.5567 150.442C99.2452 150.527 98.9757 150.587 98.719 150.674C87.6486 154.446 76.5805 158.224 65.5 161.981C64.9043 162.183 64.5952 162.488 64.3362 162.913C59.0629 171.483 53.7795 180.052 48.4986 188.619C48.3452 188.867 48.1871 189.114 48.0167 189.384C47.6066 189.384 47.2038 189.384 46.6972 189.384C46.8924 189.049 47.0432 188.775 47.2088 188.507C52.519 179.867 57.8271 171.223 63.1595 162.591C63.4733 162.082 63.4709 161.705 63.1276 161.2C57.5057 152.963 51.9162 144.713 46.3167 136.466C46.1511 136.223 45.9732 135.984 45.7459 135.668C30.5313 139.787 15.329 143.901 0.05018 148.038C0.05018 147.544 0.05018 147.171 0.05018 146.761C0.823638 146.545 1.57732 146.329 2.33595 146.124C16.4336 142.314 30.5313 138.501 44.6388 134.711C45.4197 134.501 45.8274 134.171 46.1116 133.575C50.2109 125.001 54.3405 116.434 58.4648 107.865C58.5657 107.655 58.6648 107.445 58.7909 107.177ZM111.497 73.2011C111.272 73.041 111.134 72.9368 110.988 72.8383C100.602 65.8165 90.2109 58.7947 79.8324 51.765C79.4024 51.4737 78.9895 51.3733 78.4309 51.4274C75.0952 51.7436 71.7543 52.0387 68.4157 52.3376C63.6638 52.762 58.9119 53.1804 54.16 53.6068C49.2476 54.0462 44.3373 54.4959 39.4248 54.9376C38.5525 55.0165 38.545 55.0068 38.3671 55.6684C36.1703 63.8357 33.9834 72.0034 31.7545 80.165C31.5839 80.7861 31.752 81.1797 32.2709 81.6406C41.3151 89.65 50.3371 97.6729 59.3643 105.694C59.5543 105.862 59.7571 106.021 59.9771 106.203C60.3057 106.135 60.6171 106.077 60.9233 106.01C72.8709 103.329 84.8167 100.635 96.7767 97.991C97.8838 97.7459 98.4667 97.3624 98.8871 96.5116C102.655 88.915 106.876 81.465 111.06 74.0034C111.205 73.747 111.339 73.4921 111.497 73.2011ZM64.7509 160.965C65.0676 160.865 65.2776 160.805 65.4824 160.735C76.6448 156.936 87.8043 153.135 98.9709 149.347C99.5195 149.162 99.8386 148.886 100.103 148.487C105.771 139.928 111.452 131.374 117.129 122.82C117.588 122.127 118.04 121.431 118.518 120.704C111.816 113.429 105.119 106.161 98.4176 98.8876C98.0986 98.9474 97.849 98.9861 97.6019 99.0421C85.4071 101.785 73.2148 104.531 61.0148 107.256C60.3476 107.405 59.999 107.649 59.7571 108.151C55.6181 116.768 51.4614 125.38 47.2853 133.986C47.0234 134.526 47.0432 134.946 47.3916 135.461C53.0086 143.7 58.6005 151.949 64.2 160.193C64.3657 160.436 64.5433 160.674 64.7509 160.965ZM107.667 173.263C108.05 173.138 108.317 173.061 108.574 172.966C117.766 169.57 126.959 166.17 136.156 162.782C136.645 162.602 137.004 162.365 137.29 162.008C144.617 152.944 151.951 143.882 159.298 134.827C159.617 134.433 159.718 134.069 159.614 133.62C158.525 128.933 157.497 124.237 156.35 119.558C155.829 117.433 155.092 115.338 154.432 113.235C154.307 112.831 154.069 112.45 153.877 112.041C152.952 112.312 152.147 112.569 151.326 112.785C141.138 115.46 130.95 118.133 120.751 120.785C120.057 120.966 119.622 121.236 119.283 121.749C113.318 130.752 107.336 139.748 101.329 148.734C100.95 149.299 100.936 149.775 101.136 150.373C102.68 154.953 104.232 159.534 105.67 164.135C106.597 167.098 107.333 170.095 107.667 173.263ZM81.1024 31.6865C81.0357 33.1022 80.9638 34.4116 80.9124 35.721C80.7538 39.7556 80.6057 43.7902 80.45 47.8267C80.4229 48.5075 80.3909 49.1883 80.3362 49.8692C80.3119 50.1759 80.4352 50.3898 80.739 50.5865C81.4881 51.0669 82.2119 51.5722 82.9433 52.0677C92.6719 58.6402 102.403 65.209 112.12 71.7913C112.584 72.1056 112.977 72.1883 113.588 72.065C123.366 70.0767 133.151 68.1056 142.94 66.1481C143.488 66.0383 143.76 65.8222 143.896 65.4192C144.286 64.2755 144.743 63.1436 145.089 61.9921C146.184 58.3568 146.933 54.6714 147.62 50.9801C147.817 49.9135 147.975 48.8413 148.149 47.7861C147.753 47.574 147.437 47.3985 147.116 47.2327C141.872 44.5037 136.628 41.7767 131.384 39.0477C125.899 36.1936 120.413 33.3413 114.927 30.4869C114.551 30.2921 114.203 30.1051 113.694 30.1301C110.469 30.2979 107.242 30.4406 104.014 30.593C97.7871 30.8861 91.56 31.1793 85.3329 31.4743C83.9567 31.5341 82.5776 31.6093 81.1024 31.6865ZM119.8 119.774C120.04 119.718 120.193 119.685 120.346 119.647C126.084 118.181 131.832 116.741 137.552 115.238C142.692 113.89 147.802 112.469 152.93 111.092C153.587 110.916 153.978 110.615 154.272 110.112C158.337 103.164 162.434 96.2263 166.521 89.2853C166.667 89.0365 166.805 88.7838 166.971 88.4928C159.217 81.4015 151.48 74.3255 143.74 67.2455C143.391 67.3071 143.11 67.3496 142.83 67.4056C137.861 68.4068 132.89 69.4094 127.92 70.4124C123.2 71.365 118.483 72.3256 113.76 73.2646C113.15 73.3861 112.757 73.5943 112.52 74.0786C112.08 74.9714 111.529 75.8297 111.05 76.7131C107.353 83.5402 103.671 90.3692 99.9595 97.1906C99.6676 97.7248 99.7714 98.097 100.199 98.5598C106.54 105.41 112.856 112.274 119.18 119.132C119.362 119.335 119.563 119.531 119.8 119.774ZM134.893 184.74C135.319 184.594 135.642 184.493 135.953 184.376C140.98 182.47 146.001 180.559 151.035 178.665C151.724 178.407 152.255 178.071 152.703 177.574C160.655 168.77 168.6 159.96 176.625 151.198C178.086 149.603 179.139 147.937 179.682 146.039C181.214 140.703 182.776 135.371 184.318 130.036C184.52 129.334 184.679 128.624 184.884 127.824C184.469 127.93 184.197 127.992 183.93 128.069C176.455 130.239 168.982 132.412 161.502 134.57C160.979 134.721 160.645 134.964 160.358 135.318C158.035 138.202 155.698 141.077 153.365 143.953C148.371 150.113 143.372 156.271 138.388 162.436C138.118 162.768 137.856 163.152 137.8 163.53C137.372 166.386 136.996 169.246 136.603 172.104C136.161 175.314 135.716 178.523 135.277 181.733C135.146 182.702 135.03 183.674 134.893 184.74ZM168.251 87.4996C168.453 87.4609 168.58 87.4455 168.698 87.4146C177.831 85.0504 186.962 82.6819 196.098 80.3289C196.637 80.1902 196.856 79.9819 196.943 79.544C197.548 76.5045 198.193 73.471 198.821 70.4334C199.347 67.8955 199.864 65.3556 200.398 62.8177C200.491 62.3703 200.437 62.0308 199.95 61.6834C192.374 56.297 184.815 50.8932 177.268 45.4816C176.826 45.1635 176.381 45.0128 175.795 45.0515C174.443 45.1421 173.084 45.1827 171.74 45.3139C168.631 45.6184 165.523 45.9349 162.424 46.2992C158.367 46.7774 154.321 47.3098 150.269 47.8037C149.787 47.8616 149.646 48.0368 149.579 48.3898C149.08 51.059 148.596 53.7319 148.025 56.3917C147.36 59.4752 146.591 62.5455 145.309 65.5158C145.07 66.0673 145.168 66.4203 145.65 66.8579C151.129 71.8338 156.577 76.8286 162.036 81.8199C164.09 83.7004 166.148 85.5804 168.251 87.4996ZM109.621 14.4971C109.76 14.8018 109.864 15.0352 109.975 15.2646C110.98 17.3938 112.023 19.5133 112.98 21.654C113.958 23.843 114.917 26.0454 115.3 28.3597C115.387 28.8843 115.666 29.1967 116.229 29.4879C126.68 34.8996 137.115 40.3286 147.553 45.7515C149.367 46.6947 149.364 46.6774 151.467 46.4052C159.372 45.3872 167.268 44.3109 175.264 43.7959C175.501 43.7804 175.731 43.7229 176.035 43.6725C175.671 42.8413 175.355 42.0756 175 41.3199C173.944 39.0654 172.724 36.8707 171.036 34.8492C169.889 33.4763 168.444 32.3789 166.605 31.5361C155.49 26.4369 144.402 21.2992 133.312 16.1672C132.647 15.8606 132.017 15.5057 131.404 15.1373C131.053 14.9252 130.702 14.823 130.258 14.8172C123.694 14.7169 117.134 14.6051 110.57 14.4971C110.286 14.4913 110.002 14.4971 109.621 14.4971ZM196.829 81.3955C196.56 81.4515 196.342 81.4861 196.132 81.5421C187.093 83.8834 178.056 86.2267 169.014 88.5601C168.515 88.6895 168.214 88.8977 167.994 89.2756C166.173 92.3962 164.324 95.5049 162.483 98.6195C160.156 102.558 157.84 106.498 155.49 110.428C155.236 110.856 155.243 111.204 155.436 111.639C155.863 112.615 156.249 113.607 156.558 114.609C158.248 120.077 159.454 125.62 160.645 131.162C160.803 131.897 160.959 132.632 161.127 133.417C161.443 133.34 161.658 133.297 161.863 133.238C169.521 131.02 177.174 128.796 184.837 126.588C185.336 126.445 185.628 126.206 185.879 125.865C191.84 117.805 197.805 109.75 203.785 101.7C204.087 101.293 204.136 100.945 203.966 100.494C201.67 94.3477 199.401 88.1977 197.123 82.0474C197.044 81.8353 196.935 81.6308 196.829 81.3955ZM217.816 99.2831C217.456 99.3428 217.332 99.3601 217.209 99.3853C213.739 100.087 210.272 100.793 206.8 101.488C206.313 101.584 205.812 101.628 205.28 101.703C205.253 101.734 205.191 101.794 205.142 101.86C199.019 110.108 192.898 118.357 186.784 126.609C186.611 126.842 186.49 127.112 186.416 127.379C185.961 129.029 185.541 130.686 185.084 132.337C183.646 137.535 182.257 142.742 180.362 147.854C180.325 147.955 180.337 148.068 180.32 148.238C180.735 148.091 181.059 147.982 181.378 147.864C183.797 146.965 186.211 146.055 188.64 145.172C189.25 144.95 189.688 144.645 190.051 144.196C195.235 137.803 200.383 131.39 205.671 125.049C208.013 122.241 209.993 119.323 211.406 116.166C211.587 115.761 211.799 115.365 211.989 114.964C214.043 110.664 215.948 106.324 217.206 101.831C217.431 101.021 217.596 100.207 217.816 99.2831ZM205.696 100.492C209.701 99.6786 213.569 98.8801 217.448 98.1143C218.024 98.0007 218.303 97.7902 218.499 97.3643C221.8 90.2015 223.122 82.8631 221.792 75.2782C221.068 71.153 219.63 67.1955 217.288 63.4462C216.865 62.7695 216.378 62.1177 215.901 61.4214C211.231 61.7203 206.608 61.9823 202.006 62.3413C201.858 63.0105 201.724 63.5793 201.606 64.1522C200.541 69.2763 199.488 74.4007 198.403 79.5229C198.289 80.0628 198.31 80.5586 198.505 81.0812C200.487 86.4041 202.453 91.7289 204.423 97.0537C204.843 98.1895 205.263 99.3237 205.696 100.492ZM170.606 32.0741C172.145 33.459 173.262 34.8688 174.216 36.3575C175.652 38.5966 176.766 40.9342 177.671 43.3331C177.854 43.8154 178.145 44.1857 178.617 44.521C186.142 49.8789 193.656 55.2421 201.159 60.6169C201.603 60.9353 202.026 61.0549 202.626 61.0143C206.168 60.7695 209.711 60.5553 213.255 60.3259C213.951 60.2816 214.643 60.2199 215.333 60.1658C215.348 60.0252 215.372 59.9477 215.358 59.8767C215.328 59.7278 215.281 59.5816 215.234 59.4331C214.498 57.0278 213.168 54.8237 211.522 52.7252C209.18 49.738 206.309 47.0804 203.16 44.6004C197.195 39.9004 190.518 35.8928 183.426 32.2882C183.016 32.0799 182.606 32.0355 182.146 32.0355C178.622 32.0394 175.098 32.0375 171.574 32.0394C171.325 32.0394 171.073 32.0568 170.606 32.0741ZM179.789 30.7183C179.806 30.6682 179.823 30.6161 179.84 30.566C179.556 30.4078 179.279 30.2401 178.985 30.0935C177.053 29.1292 175.143 28.1379 173.181 27.2102C159.441 20.7225 145.398 14.6591 131.145 8.89069C126.304 6.93126 121.354 5.13385 116.451 3.26697C116.165 3.15897 115.861 3.0799 115.564 2.98735C115.621 3.18404 115.732 3.27468 115.856 3.35378C121.55 7.00457 127.243 10.6554 132.939 14.3023C133.189 14.4604 133.458 14.6031 133.734 14.7304C145.08 19.9646 156.424 25.1968 167.764 30.4348C168.199 30.6354 168.631 30.7241 169.133 30.7222C172.009 30.7106 174.886 30.7164 177.762 30.7164C178.439 30.7183 179.114 30.7183 179.789 30.7183Z" fill="#111111" />
      <path d="M179.789 30.7184C179.114 30.7184 178.439 30.7184 177.765 30.7184C174.888 30.7184 172.012 30.7126 169.136 30.7242C168.634 30.7261 168.201 30.6374 167.767 30.4368C156.427 25.1969 145.079 19.9666 133.737 14.7324C133.46 14.6052 133.188 14.4624 132.941 14.3043C127.245 10.6573 121.552 7.00654 115.859 3.35576C115.735 3.2767 115.624 3.18606 115.567 2.98933C115.863 3.08188 116.167 3.15903 116.454 3.26895C121.357 5.13583 126.306 6.93327 131.147 8.89271C145.4 14.6611 159.444 20.7245 173.183 27.2123C175.145 28.138 177.055 29.1293 178.988 30.0955C179.282 30.242 179.559 30.4098 179.843 30.568C179.823 30.6162 179.806 30.6663 179.789 30.7184Z" fill="#111111" />
      <path d="M105.927 71.5079C106.899 72.1635 107.721 72.7188 108.549 73.2782C108.383 74.3391 108.141 75.3361 107.58 76.2925C106.587 77.9861 105.67 79.706 104.716 81.415C104.593 81.6369 104.449 81.8508 104.219 82.0493C104.128 78.5181 104.798 75.0718 105.927 71.5079Z" fill="#111111" />
      <path d="M154.321 119.51C155.015 122.376 155.71 125.244 156.402 128.104C155.104 128.451 146.653 127.041 142.178 125.697C137.611 124.328 133.29 122.619 129.111 120.345C130.06 120.098 130.878 119.952 131.617 119.678C132.645 119.298 133.438 119.449 134.347 119.961C136.393 121.115 138.647 122 140.972 122.767C141.299 122.876 141.634 122.993 141.978 123.03C142.19 123.053 142.512 122.989 142.64 122.87C143.685 121.892 144.965 121.126 146.248 120.362C146.371 120.289 146.465 120.187 146.614 120.067C145.727 118.885 144.85 117.718 143.93 116.494C144.956 116.218 145.889 115.965 146.918 115.688C147.128 115.954 147.325 116.203 147.523 116.453C147.891 116.928 148.301 117.385 148.618 117.88C149.114 118.659 149.94 119.018 150.99 119.136C152.045 119.258 153.098 119.373 154.321 119.51Z" fill="#111111" />
      <path d="M107.84 66.7617C113.17 56.2297 122.17 48.2549 134.871 42.7583C135.956 43.3214 136.994 43.8635 138.133 44.4556C137.822 44.5981 137.619 44.7023 137.404 44.7891C136.141 45.2966 134.881 45.8094 133.609 46.3011C131.424 47.1459 129.474 48.2684 127.547 49.4158C127.062 49.7053 126.613 50.0406 126.202 50.3936C125.936 50.6252 125.773 50.9278 125.471 51.3154C125.894 51.3368 126.136 51.3812 126.366 51.356C128.441 51.1188 130.517 50.8778 132.59 50.6192C134.92 50.3301 137.249 50.0271 139.62 50.0774C140.607 50.0985 141.432 49.8632 142.176 49.3387C142.94 48.8008 143.794 48.3436 144.57 47.8729C144.684 47.9038 144.719 47.9098 144.746 47.9233C146.221 48.635 146.038 48.3628 145.813 49.6241C145.428 51.7959 144.968 53.9598 144.536 56.1256C144.481 56.3914 144.397 56.6538 144.293 57.0492C144.039 56.735 143.869 56.5305 143.703 56.3222C142.846 55.2538 141.973 54.1929 141.143 53.1109C140.802 52.6696 140.35 52.5132 139.707 52.5015C136.888 52.4477 134.088 52.5846 131.318 53.0109C129.862 53.2346 128.407 53.4718 126.964 53.738C126.61 53.8034 126.205 53.95 125.983 54.162C122.926 57.0684 119.874 59.9805 117.556 63.2977C116.615 64.6459 115.75 66.0305 114.905 67.4192C114.393 68.2602 113.924 69.118 113.802 70.0669C113.753 70.4568 113.484 70.5357 113.076 70.3237C112.888 70.2271 112.728 70.0981 112.557 69.9823C111.213 69.0737 109.869 68.1673 108.527 67.2571C108.307 67.1068 108.1 66.9485 107.84 66.7617Z" fill="#111111" />
      <path d="M118.962 79.7485C125.496 78.5297 131.948 77.3917 138.615 77.0158C139.287 75.6714 139.905 74.3214 140.634 73.0102C141.353 71.718 142.186 70.4643 143.056 69.0526C143.881 69.8068 144.58 70.447 145.262 71.0699C144.442 72.5105 143.636 73.8838 142.878 75.2722C142.509 75.9436 142.218 76.6399 141.907 77.3282C141.691 77.8064 141.763 78.2248 142.151 78.6744C146.135 83.3011 150.093 87.941 154.035 92.5891C154.353 92.965 154.724 93.1481 155.275 93.1812C157.079 93.291 158.883 93.4105 160.687 93.5244C161.001 93.5436 161.312 93.5534 161.759 93.5744C161.29 94.3748 160.865 95.1 160.408 95.8771C159.098 95.835 157.81 95.7906 156.526 95.7481C155.784 95.7229 154.941 95.5222 154.326 95.7286C153.719 95.9331 153.316 96.5387 152.861 96.9899C149.557 100.257 146.26 103.53 142.967 106.803C141.788 107.973 141.79 107.977 142.611 109.308C143.1 110.102 143.602 110.893 144.096 111.688C144.108 111.709 144.103 111.738 144.12 111.842C143.179 112.097 142.218 112.357 141.188 112.635C141.019 112.395 140.856 112.187 140.718 111.969C140.112 111.02 139.49 110.079 138.926 109.117C138.618 108.588 138.168 108.334 137.429 108.207C135.603 107.892 133.767 107.576 131.998 107.111C127.757 105.994 123.889 104.355 120.652 101.892C120.425 101.719 120.161 101.574 119.815 101.355C117.915 102.143 116.014 102.932 114.139 103.711C114.502 104.857 116.968 107.75 119.862 110.498C122.063 112.59 124.547 114.457 127.519 116.16C126.257 116.48 125.187 116.785 124.088 117.001C123.843 117.049 123.445 116.829 123.205 116.659C120.504 114.766 118.068 112.679 115.881 110.417C110.56 104.913 107.009 98.7835 105.245 92.0278C105.171 91.7481 105.179 91.4124 105.307 91.1541C105.87 90.0278 106.493 88.9188 107.099 87.8041C107.143 87.7233 107.232 87.6575 107.385 87.4955C107.625 88.6105 107.818 89.6211 108.06 90.6237C108.776 93.5763 109.715 96.4827 111.181 99.2696C111.571 100.012 111.942 100.77 112.688 101.433C114.438 100.732 116.18 100.033 117.999 99.3041C117.816 98.6256 117.668 97.9853 117.465 97.3545C116.825 95.3737 116.192 93.3951 115.943 91.3526C115.718 89.5128 115.725 87.6729 115.92 85.835C116.049 84.6297 116.229 83.4263 116.444 82.2267C116.536 81.7177 116.385 81.2876 116.093 80.8515C115.302 79.6696 114.519 78.4835 113.758 77.2876C113.59 77.0256 113.365 76.688 113.452 76.447C113.649 75.8951 113.936 75.332 114.359 74.8711C114.571 74.6417 115.167 74.6282 115.686 74.4914C116.795 76.2752 117.875 78.0053 118.962 79.7485Z" fill="#111111" />
      <path d="M151.509 49.2402C154.17 48.9049 156.716 48.5654 159.269 48.2684C163.104 47.8248 166.941 47.4026 170.781 46.9936C172.222 46.8414 173.672 46.7545 175.118 46.6312C175.556 46.5944 175.911 46.6504 176.262 46.903C178.657 48.6368 181.071 50.3511 183.478 52.0733C183.572 52.141 183.646 52.2218 183.759 52.3222C183.587 52.5402 183.421 52.7523 183.25 52.9624C181.338 55.3075 179.662 57.7549 178.303 60.3241C176.989 62.8139 177.236 62.4838 178.61 64.3876C179.991 66.2985 181.481 68.1598 182.914 70.0477C184.528 72.1771 186.048 74.3447 187.2 76.653C187.38 77.012 187.649 77.1624 188.106 77.2222C190.239 77.5019 192.369 77.797 194.499 78.0861C194.687 78.1113 194.875 78.1361 195.141 78.1729C195.082 78.4391 195.033 78.6763 194.973 78.9406C190.572 80.0805 186.209 81.2105 181.659 82.3887C181.869 82.0263 182.008 81.8083 182.124 81.5846C182.675 80.5105 183.24 79.4399 183.762 78.356C184.061 77.7372 183.969 77.1335 183.574 76.5316C182.087 74.2658 180.693 71.959 179.139 69.7218C177.864 67.888 176.406 66.1308 175.037 64.3353C174.772 63.9884 174.453 63.7801 173.892 63.7586C169.857 63.6045 165.827 63.3538 161.791 63.2805C158.203 63.215 154.623 63.4617 151.059 63.8244C150.54 63.8763 150.269 64.044 150.021 64.3778C149.463 65.1376 148.853 65.8763 148.193 66.7094C147.852 66.4049 147.588 66.1696 147.313 65.9226C149.409 60.4782 150.451 54.8932 151.509 49.2402Z" fill="#111111" />
      <path d="M152.441 44.444C155.27 43.6128 158.1 42.7816 160.964 41.9387C160.964 41.2696 160.964 40.5752 160.964 39.8019C159.909 39.8019 158.918 39.7575 157.937 39.8098C155.29 39.9504 152.663 40.2203 150.118 40.8203C148.482 41.206 146.869 41.6455 145.265 42.1068C144.749 42.2553 144.373 42.2338 143.93 41.9831C143.078 41.5011 142.186 41.0613 141.18 40.535C141.556 40.4056 141.776 40.3207 142.003 40.2553C149.742 38.0297 157.724 37.0594 165.968 37.4801C167.416 37.5534 168.859 37.7038 170.307 37.7906C170.754 37.8173 171.009 37.9545 171.182 38.2707C171.506 38.8684 171.861 39.4549 172.279 40.1782C169.37 39.8733 166.632 39.6109 163.769 39.7767C163.769 40.5196 163.769 41.2135 163.769 41.9831C164.705 42.2474 165.716 42.5308 166.729 42.8143C166.717 42.8511 166.704 42.8876 166.694 42.9226C161.957 43.4932 157.222 44.0662 152.485 44.6368C152.47 44.5733 152.456 44.5075 152.441 44.444Z" fill="#111111" />
      <path d="M160.054 119.566C161.09 119.527 162.019 119.491 162.95 119.46C166.118 119.358 169.271 119.142 172.392 118.686C172.679 118.644 172.958 118.582 173.245 118.548C174.999 118.33 176.254 117.651 177.272 116.457C179.42 113.936 181.631 111.453 183.391 108.745C183.537 108.519 183.69 108.297 183.836 108.074C184.149 107.586 184.132 107.103 183.781 106.629C183.636 106.432 183.507 106.226 183.339 106.043C180.421 102.834 177.488 99.6324 174.581 96.4173C174.147 95.935 173.66 95.7444 172.886 95.7887C171.05 95.8929 169.204 95.9218 167.363 95.9775C167.055 95.9872 166.743 95.9793 166.276 95.9793C166.758 95.1677 167.149 94.4542 167.613 93.7692C167.717 93.6169 168.065 93.5053 168.315 93.4876C169.281 93.4203 170.25 93.3703 171.221 93.3681C172.298 93.3662 173.03 92.9805 173.635 92.3094C174.863 90.9496 176.136 89.6151 177.411 88.2827C177.571 88.1147 177.833 87.9643 178.088 87.897C183.841 86.3906 189.601 84.8978 195.438 83.382C195.551 83.6075 195.672 83.8027 195.749 84.0068C197.76 89.432 199.759 94.8591 201.793 100.278C201.979 100.768 201.907 101.146 201.566 101.547C201.282 101.883 201.003 102.23 200.792 102.597C200.32 103.422 199.518 103.949 198.509 104.359C195.292 105.673 191.993 106.814 188.412 107.371C187.703 107.482 187.384 107.817 187.127 108.28C186.025 110.274 184.782 112.218 183.27 114.041C181.973 115.605 180.552 117.105 179.188 118.636C178.896 118.964 178.617 119.298 178.281 119.689C179.625 120.735 180.93 121.747 182.229 122.762C182.595 123.047 183 122.968 183.399 122.843C184.357 122.544 185.306 122.231 186.383 121.882C186.275 122.086 186.216 122.235 186.119 122.368C185.56 123.136 184.98 123.894 184.431 124.667C184.216 124.968 183.945 125.165 183.522 125.294C179.543 126.509 175.516 127.575 171.25 128.009C168.268 128.314 165.283 128.546 162.159 128.515C161.465 125.56 160.773 122.621 160.054 119.566Z" fill="#111111" />
      <path d="M192.717 121.768C193.093 121.255 193.473 120.77 193.809 120.266C195.025 118.445 196.542 116.877 198.658 115.56C203.375 112.619 206.869 108.812 210.195 104.922C210.64 104.402 210.974 103.821 211.34 103.26C211.438 103.108 211.473 102.93 211.542 102.743C211.337 102.616 211.151 102.502 210.843 102.311C212.33 102.006 213.692 101.727 215.189 101.42C215.016 102.332 214.819 103.152 214.307 103.918C211.584 107.994 208.159 111.672 204.022 114.945C200.879 117.433 197.417 119.614 193.631 121.479C193.414 121.587 193.194 121.695 192.969 121.794C192.932 121.811 192.86 121.784 192.717 121.768Z" fill="#111111" />
      <path d="M207.156 63.5658C209.825 63.3944 212.269 63.2361 214.752 63.0759C214.97 63.3944 215.18 63.6759 215.363 63.9669C217.74 67.7353 219.186 71.718 219.853 75.8778C220.957 82.7628 219.85 89.453 216.976 95.9929C216.747 96.5177 216.425 96.8147 215.615 96.7778C215.639 96.6602 215.644 96.5444 215.691 96.4402C216.67 94.315 217.181 92.1086 217.451 89.8699C217.735 87.4861 218.019 85.0985 218.15 82.7071C218.311 79.7989 217.967 76.9117 217.119 74.0707C217.075 73.9244 217.011 73.7797 216.974 73.6331C216.776 72.8211 216.136 72.4199 215.096 72.3737C214.419 72.3429 213.744 72.2947 213.003 72.2504C212.857 72.4143 212.677 72.5898 212.533 72.7805C212.047 73.4346 211.545 74.0823 211.1 74.7556C209.889 76.5857 208.426 78.2692 206.437 79.6425C205.916 80.0011 205.775 80.3425 205.985 80.8902C207.28 84.2729 207.799 87.7579 207.821 91.2699C207.833 93.1523 207.497 95.0383 207.314 96.9207C207.289 97.1714 207.193 97.4222 207.21 97.6707C207.228 97.9158 207.349 98.1549 207.448 98.4752C207.356 98.5579 207.169 98.6139 207.033 98.3786C206.926 98.1974 206.875 97.9966 206.803 97.8019C204.749 92.2594 202.713 86.7109 200.63 81.1737C200.324 80.3579 200.353 79.5962 200.687 78.7361C201.144 78.7823 201.613 78.8169 202.073 78.8808C202.609 78.956 203.012 78.8169 203.348 78.4951C204.794 77.1045 206.279 75.7372 207.68 74.3214C208.505 73.4865 209.237 72.5899 209.949 71.691C210.596 70.8752 210.678 70.0323 210.186 69.0989C209.234 67.288 208.612 65.3711 207.156 63.5658Z" fill="#111111" />
      <path d="M177.932 38.9726C192.542 42.3169 203.75 48.8816 212.009 58.7906C211.151 58.8583 210.492 58.9143 209.832 58.9586C208.127 59.0741 206.419 59.1707 204.717 59.3075C204.159 59.3519 203.857 59.1978 203.538 58.8485C202.359 57.5564 201.126 56.2932 199.906 55.0241C199.693 54.8045 199.421 54.6192 199.194 54.4053C197.538 52.8372 195.287 52.2586 192.806 52.0466C192.499 52.0196 192.127 51.9906 191.914 51.8459C190.772 51.0744 189.67 50.2643 188.588 49.3929C191.109 49.306 193.557 49.688 195.979 49.9383C196.066 49.8575 196.122 49.8248 196.142 49.7823C196.525 48.9899 196.328 48.4286 195.391 47.8556C191.17 45.2771 186.473 43.4256 181.439 42.0526C180.861 41.8944 180.282 41.7248 179.689 41.6109C179.185 41.5147 178.943 41.2966 178.802 40.9165C178.578 40.315 178.279 39.7323 177.932 38.9726Z" fill="#111111" />
      <path d="M269.337 41.4799H300.679C309.959 41.4799 318.013 47.4927 318.013 54.8728V69.495H297.001V60.2025H265.833L273.012 64.439V69.495L318.012 95.0499V117.871C318.012 125.524 309.958 131.4 300.678 131.4H269.336C259.705 131.4 252.176 125.524 252.176 117.871V103.249H273.012V112.678H296.826V103.249L252 77.8311V54.8728C252 47.3566 259.53 41.4799 269.334 41.4799H269.337ZM337.373 59.5194L344.377 63.7559V112.269H368.366V59.5198L337.373 59.5194ZM389.551 54.1897V117.461C389.551 124.977 381.497 131.127 372.217 131.127H344.376V183.74H323.364V44.7634L318.986 40.6634H372.217C381.497 40.6634 389.551 46.5397 389.551 54.1924V54.1897ZM409.786 59.9296L416.965 64.0292V112.269H440.779V59.9303L409.786 59.9296ZM461.793 54.5999V117.598C461.793 124.841 453.736 131.127 444.455 131.127H413.289C403.483 131.127 395.954 124.841 395.954 117.598V54.5999C395.954 46.9469 403.483 41.0709 413.289 41.0709H444.455C454.264 41.0709 461.793 47.3574 461.793 54.5999ZM468.364 131.674V45.9897L463.988 41.7533H506.012C515.645 41.7533 523.174 47.6296 523.174 55.2818V60.4747H482.202L489.379 64.7111V131.673H468.369L468.364 131.674ZM537.979 60.3393L545.159 64.439V112.268H578.95V130.854H541.479C531.85 130.854 524.321 124.977 524.321 117.461V8.27077H545.155V41.6145H568.793V60.1999L537.979 60.3393ZM597.259 41.4799H628.602C637.883 41.4799 645.936 47.4927 645.936 54.8728V69.495H624.926V60.2025H593.755L600.936 64.439V69.495L645.936 95.0499V117.871C645.936 125.524 637.879 131.4 628.602 131.4H597.259C587.626 131.4 580.098 125.524 580.098 117.871V103.249H600.936V112.678H624.75V103.249L579.921 77.8311V54.8728C579.921 47.3566 587.45 41.4799 597.259 41.4799ZM689.459 41.754H711.174L720.802 103.523L730.607 41.754H751.793L737.612 131.674H704.169L700.317 95.1867L696.464 131.674H663.017L649.536 45.854L645.16 41.7544H670.021L679.655 103.523L689.459 41.754ZM769.226 60.0653L776.407 64.3017V78.7871H800.221V60.0649L769.226 60.0653ZM772.731 41.3439H803.898C813.526 41.3439 821.055 47.2202 821.055 54.8728V84.1175C821.055 91.7702 813.526 97.6461 803.898 97.6461H776.407V112.542H821.055V117.871C821.055 125.387 813.526 131.264 803.898 131.264H772.731C762.921 131.264 755.393 125.387 755.393 117.871V54.8724C755.393 47.2198 762.921 41.3439 772.731 41.3439ZM839.012 88.2164L846.017 92.4529V112.405H870.007V88.2168L839.012 88.2164ZM890.84 54.7356V131.127V131.263L842.517 131.127C832.712 131.127 825.183 125.251 825.183 117.734V82.8867C825.183 75.3705 832.712 69.4942 842.517 69.4942H870.007V60.0649L825.179 59.9281V54.7352C825.179 47.0826 832.707 41.2066 842.512 41.2066H873.683C883.312 41.2066 890.84 47.0833 890.84 54.7356ZM897.421 131.674V45.9897L893.04 41.7533H935.064C944.698 41.7533 952.226 47.6296 952.226 55.2818V60.4747H911.255L918.431 64.7111V131.673L897.421 131.674Z" fill="#F96D00" />
      </svg>
    </div>
    <div className='flex items-center h-full mx-5'>
      <ShoppingCart/>
    </div>
  </nav>
  <div className='flex-col items-center hidden md:flex md:items-center md:flex-rows'>
      <ul className='flex align leading-8 md:leading-none text-[1.2rem] md:h-min md:text-[.8rem] font-inter font-normal tracking-widest text-black '>
        <li className='mx-2'><a href="#">Inicio</a></li>
        <li className='mx-2'><a href="#">Hombres</a></li>
        <li className='mx-2'><a href="#">Mujeres</a></li>
        <li className='mx-2'><a href="#">Niños</a></li>
        <li className='mx-2'><a href="#">Marca</a></li>
        <li className='mx-2'><a href="#">Contacto</a></li>
      </ul>
    </div>
    <MenuMovil/>
</>
  )
}

export default NavBar