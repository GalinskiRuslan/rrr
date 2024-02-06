import cl from './ConsciousnessBlock.module.css'
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import backImg from './imgs/Group 6 (1).png'
import head from './imgs/Group.png'
import atoms from './imgs/Group11.png'

export const ConsciousnessBlock = () => {
    const t = useTranslations('main');
    return (
        <div className={cl.container}>
            <Image alt='notes' src={backImg} className={cl.backImg} />
            <div className={cl.wrapper}>
                <div className={cl.leftBlock}>
                    <svg width="223" height="93" viewBox="0 0 223 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M71.8281 71.6031C75.0373 76.6708 75.2628 81.8134 71.9496 86.8868C69.7234 90.2941 66.4334 92.2312 62.3916 92.6579C58.7662 93.0441 55.6149 91.7066 52.9146 89.3716C49.2429 86.195 47.595 81.9287 46.6294 77.328C46.4559 76.5093 46.3345 75.6792 46.0223 74.8605C45.71 76.2096 45.4325 77.5644 45.074 78.8962C44.1315 82.4533 42.7611 85.826 40.4136 88.7202C36.9789 92.9576 32.4746 94.0069 27.3979 92.0525C18.1175 88.4838 17.1634 78.3715 21.1415 72.5602C21.2225 72.4391 21.2745 72.3007 21.3381 72.1681C21.4885 72.0816 21.6966 71.9087 21.5926 71.7934C21.4364 71.6262 21.2861 71.851 21.1647 71.9779C16.9784 74.6414 12.5434 75.2756 7.95817 73.2347C3.29773 71.165 0.562761 67.4694 0.0597112 62.4191C-0.356606 58.2565 1.43587 54.7859 4.4426 51.9839C7.98708 48.6804 12.4162 47.3198 17.1461 46.5761C16.9668 46.1726 16.5967 46.2879 16.3192 46.2417C12.4856 45.6076 8.83706 44.4833 5.63952 42.1888C2.93345 40.2459 1.03112 37.6976 0.314127 34.423C-0.761358 29.534 1.03112 25.5445 4.6392 22.3563C9.03366 18.4705 15.29 18.0323 20.3378 21.036C20.6211 21.2032 20.9103 21.3762 21.1936 21.5434C21.2919 21.6068 21.3844 21.7567 21.4943 21.5837C21.5174 21.5491 21.4133 21.4396 21.3671 21.3646C19.0079 17.6864 18.3545 13.7833 19.5341 9.52279C21.4307 2.62754 30.26 -0.710543 34.9436 0.580875C37.6381 1.32459 39.7081 2.89851 41.3734 5.06048C44.2009 8.72142 45.577 12.982 46.3981 17.45C46.6063 18.5685 46.7393 19.7042 46.9416 21.0591C47.3059 19.0124 47.5719 17.1791 47.9651 15.3688C48.7572 11.7424 49.9946 8.27173 52.1687 5.21038C54.1231 2.46035 56.5805 0.459805 60.0903 0.0562365C61.6342 -0.122487 63.1144 0.142715 64.5715 0.598171C70.5792 2.46612 73.8114 6.39802 74.2682 12.5496C74.4937 15.5994 73.5223 18.3667 71.886 20.9149C71.8513 20.9899 71.8224 21.0591 71.7877 21.134C71.8802 21.1283 71.9669 21.1225 72.0594 21.1167C76.2457 18.4532 80.6749 17.8132 85.2601 19.8541C90.0478 21.9873 92.777 25.7866 93.1991 30.9869C93.4997 34.6709 91.9501 37.836 89.4291 40.4765C86.0697 43.9991 81.7215 45.5614 77.061 46.4493C76.2978 46.5934 75.5287 46.6914 74.7655 46.824C74.7077 46.8356 74.6614 46.9105 74.54 47.0143C77.6797 47.5274 80.6922 48.2884 83.5717 49.5279C86.0003 50.5772 88.2669 51.8859 90.0998 53.8231C92.7481 56.6192 93.6906 59.8996 92.5977 63.6125C90.6144 70.3463 86.3877 73.7247 79.5936 73.84C76.8182 73.8862 74.3145 72.8772 71.99 71.4129C71.886 71.2341 71.753 71.188 71.5737 71.3149C71.6662 71.4186 71.7472 71.5109 71.8281 71.6031ZM46.4039 63.0532C46.7797 61.5312 47.1382 60.0092 47.5256 58.4872C49.11 52.2549 52.9667 48.4152 59.408 47.3083C60.7148 47.0835 62.0216 46.8471 63.5943 46.5646C60.6396 46.04 58.0087 45.3424 55.4993 44.2297C52.3306 42.8229 50.1161 40.5457 48.8613 37.3056C47.9246 34.8784 47.3984 32.359 47.0804 29.7934C47.0515 29.5801 47.1787 29.24 46.6814 29.2227C46.6236 31.033 46.1784 32.7683 45.7216 34.5094C44.1662 40.3842 40.6159 44.1778 34.4868 45.4058C32.6481 45.7748 30.8036 46.1149 28.9648 46.5415C31.9889 47.1065 34.9378 47.833 37.7653 49.0437C41.2809 50.5484 43.6169 53.0736 44.8485 56.6653C45.5655 58.7351 46.0338 60.8509 46.4039 63.0532Z" fill="#F14D4D" />
                        <path d="M214.249 73.8284C213.399 75.2063 212.601 76.6304 211.207 77.5759C210.149 78.2965 209.016 78.4579 207.831 78.0255C206.588 77.5759 206.027 76.5785 205.819 75.0853C205.096 75.8463 204.529 76.5093 203.887 77.0973C202.812 78.0774 201.569 78.3715 200.192 77.7603C198.828 77.155 198.429 75.9789 198.336 74.6067C198.273 73.6612 198.556 72.7849 198.857 71.9086C199.597 69.7582 200.516 67.6769 201.598 65.5034C200.643 65.6821 199.851 65.8781 199.042 65.7513C198.498 65.6648 198.458 66.0857 198.313 66.4028C197.122 69.0721 195.705 71.6146 194.121 74.0648C193.479 75.0622 192.809 76.025 191.947 76.8494C190.872 77.8872 189.652 78.3138 188.2 77.7949C186.865 77.3222 186.414 76.2441 186.257 74.9527C186.228 74.7163 186.286 74.4396 186.009 74.2032C185.425 75.0622 184.829 75.8982 184.118 76.6419C182.32 78.5098 180.238 78.4579 178.492 76.5151C177.948 75.9097 177.601 75.1948 177.347 74.2378C176.647 75.1948 176.052 76.0308 175.335 76.7572C174.23 77.8757 172.976 78.4349 171.432 77.8065C169.917 77.1896 169.46 75.9212 169.443 74.4107C169.443 74.2666 169.425 74.1225 169.42 73.9783C169.032 73.8111 168.888 74.1628 168.662 74.307C168.067 74.6875 167.477 75.2121 166.795 75.2409C165.066 75.3101 163.88 76.3651 162.522 77.2011C158.705 79.5533 154.64 77.3625 154.658 72.9291C154.681 68.4264 156.791 64.898 160.556 62.5055C163.58 60.5856 167.274 62.7015 167.668 66.4143C167.858 68.2073 167.575 69.9427 166.933 71.6261C166.789 71.9951 166.65 72.3698 166.401 73.0213C168.234 72.3295 169.535 71.3724 170.183 69.787C171.062 67.6365 171.773 65.4227 172.577 63.2434C172.768 62.7303 172.594 62.5862 172.097 62.615C171.692 62.6381 171.282 62.6265 170.877 62.6208C169.946 62.5977 168.94 61.4389 169.038 60.5222C169.09 59.9803 169.437 60.234 169.691 60.2801C170.709 60.4646 171.733 60.5914 172.773 60.6375C173.421 60.6663 173.756 60.4761 174.005 59.8534C174.612 58.3487 175.289 56.8728 175.977 55.4027C176.74 53.7711 177.243 53.6097 178.92 54.3476C180.342 54.976 180.406 55.1836 179.741 56.5038C179.093 57.7837 178.486 59.0751 177.786 60.5164C179.007 60.4127 179.573 61.0353 179.903 61.9693C180.076 62.4536 180.053 62.7245 179.394 62.6784C178.55 62.6208 177.509 62.3729 176.902 62.7534C176.139 63.2261 176.023 64.3965 175.67 65.2786C174.629 67.8845 173.635 70.5076 173.352 73.3269C173.294 73.9264 172.982 74.7393 173.635 75.0564C174.306 75.3793 174.722 74.601 175.115 74.1686C176.37 72.7965 177.393 71.2744 178.047 69.516C178.81 67.4521 179.897 65.5783 181.458 63.9987C184.193 61.2256 186.373 61.1967 189.148 63.8891C189.212 63.8084 189.293 63.7335 189.339 63.647C190.195 62.1653 190.369 62.1077 191.935 62.788C193.462 63.451 193.531 63.7681 192.745 65.1805C191.224 67.9248 190.253 70.8478 190.097 74.0014C190.079 74.3877 189.964 74.8777 190.461 75.0564C190.866 75.2006 191.143 74.8431 191.404 74.601C193.265 72.8772 194.277 70.6057 195.411 68.4149C195.648 67.9594 195.827 67.4694 196.052 67.0024C196.532 66.005 197.024 65.2324 195.526 64.3965C194.306 63.7162 194.208 62.1365 194.618 60.7817C195.093 59.2193 196.07 57.9682 197.446 57.0631C198.221 56.55 199.019 56.475 199.84 56.9881C200.655 57.4955 200.956 58.2046 200.828 59.1501C200.667 60.332 200.325 61.462 199.863 62.5458C199.423 63.572 199.84 63.6873 200.701 63.5605C201.251 63.4798 201.806 63.4337 202.355 63.3645C203.471 63.2319 204.275 63.7277 204.916 64.5925C205.506 65.3881 205.055 66.028 204.697 66.7314C203.616 68.8357 202.679 71.0035 202.297 73.3614C202.262 73.5805 202.222 73.7996 202.21 74.0187C202.187 74.428 202.141 74.8835 202.575 75.0968C202.985 75.2928 203.263 74.9181 203.517 74.6875C205.13 73.2231 206.403 71.505 207.172 69.4699C208.004 67.2676 208.993 65.1114 209.536 62.8053C209.658 62.2921 209.953 62.1192 210.421 62.2518C212.589 62.8687 213.717 63.6758 212.641 65.9762C211.768 67.8441 211.005 69.7697 210.242 71.6838C209.883 72.5774 209.646 73.5113 209.681 74.4857C209.716 75.3735 210.155 75.5984 210.901 75.1026C211.63 74.6183 212.098 73.8976 212.537 73.1712C213.682 71.2687 214.55 69.2335 215.296 67.1465C215.781 65.7917 216.365 64.4829 216.961 63.1685C217.366 62.2691 217.95 62.0442 218.823 62.3729C219.303 62.5574 219.8 62.7245 220.239 62.984C221.39 63.6643 221.43 64.0967 220.517 65.0191C220.309 65.2267 220.112 65.463 219.985 65.7225C218.505 68.8588 218.059 72.2372 217.718 75.6676C219.441 74.0763 221.02 72.4102 221.991 70.2597C222.113 69.9945 222.09 69.4814 222.558 69.5852C222.997 69.6774 223.009 70.1271 222.997 70.5019C222.974 71.4474 222.639 72.3064 222.217 73.1308C221.13 75.2582 219.655 77.1031 217.874 78.6828C217.342 79.1555 217.082 79.6456 217.001 80.3662C216.533 84.5749 213.272 87.4517 209.126 87.3941C207.264 87.371 205.749 86.2526 205.321 84.4365C205.177 83.8196 204.94 83.6351 204.367 83.4968C203.17 83.2085 202.54 82.3149 202.245 81.1676C202.089 80.5623 202.286 80.3374 202.933 80.5565C206.483 81.773 209.779 81.012 212.948 79.2535C213.544 78.9249 213.919 78.5502 213.983 77.8295C214.104 76.5496 214.313 75.2755 214.486 73.9956C214.555 73.8342 214.596 73.6728 214.492 73.5113C214.393 73.6267 214.324 73.7247 214.249 73.8284ZM158.133 72.1277C158.11 74.4741 158.954 75.3505 160.423 74.9757C161.406 74.722 162.215 73.6266 162.117 72.6004C162.001 71.4128 162.313 70.4846 163.499 70.0118C163.77 69.9023 163.892 69.7293 163.973 69.4584C164.308 68.363 164.609 67.2676 164.597 66.1145C164.586 65.3708 164.592 64.5637 163.788 64.2062C162.967 63.8488 162.261 64.2754 161.7 64.8462C159.578 67.0024 158.486 69.6371 158.133 72.1277ZM181.366 73.5575C181.383 74.2493 181.314 74.7566 181.805 74.9642C182.256 75.1602 182.574 74.7682 182.84 74.4857C185.003 72.1853 186.732 69.591 187.946 66.6795C188.397 65.6014 187.767 64.8058 186.587 64.8289C185.98 64.8404 185.529 65.1575 185.141 65.5495C182.898 67.8499 181.684 70.623 181.366 73.5575ZM212.844 81.8825C211.208 82.6262 209.704 83.1451 208.126 83.3642C207.125 83.5025 207.31 84.0099 207.617 84.5749C208.27 85.7741 210.103 85.9528 211.167 84.9093C211.965 84.1194 212.451 83.1393 212.844 81.8825ZM198.735 59.0578C197.55 59.9745 196.914 61.4043 197.232 62.2864C197.301 62.4766 197.452 62.6727 197.619 62.7822C197.752 62.8629 197.862 62.6842 197.914 62.5401C198.307 61.4504 198.955 60.4242 198.735 59.0578Z" fill="white" />
                        <path d="M111.483 42.5173C111.124 43.3994 110.633 44.1835 110.332 45.0656C110.077 45.8035 110.332 46.2128 111.101 46.282C111.396 46.3109 111.708 46.357 111.98 46.282C114.495 45.6306 116.582 44.2872 118.213 42.2867C118.918 41.4219 118.629 40.7128 117.508 40.217C115.842 39.4848 114.056 39.1389 112.304 38.6892C110.794 38.3029 109.32 37.8186 107.996 36.9711C105.168 35.1608 104.44 32.676 106.059 29.753C108.782 24.8295 112.911 21.3012 117.745 18.5396C119.352 17.6172 121.11 17.0695 122.868 16.4814C126.268 15.3341 130.506 19.266 129.361 23.0769C128.87 24.7084 128.314 26.3054 127.54 27.8159C127.21 28.4558 127.389 28.6057 128.031 28.6749C129.783 28.8709 129.777 28.8882 130.483 27.2797C131.044 25.9941 131.61 24.7142 132.206 23.4458C132.952 21.8719 133.443 21.7047 135.074 22.385C136.502 22.9846 136.606 23.2844 135.93 24.6277C135.363 25.7462 134.843 26.8877 134.282 28.0119C134.085 28.4097 134.085 28.6519 134.611 28.623C135.126 28.5942 135.45 28.8652 135.693 29.263C135.947 29.6665 136.357 30.122 136.149 30.5659C135.935 31.0156 135.351 30.7274 134.941 30.7274C132.958 30.7216 132.94 30.6985 132.194 32.5492C131.055 35.3915 129.905 38.2337 129.569 41.3124C129.5 41.9408 129.153 42.8113 129.858 43.1342C130.575 43.4628 130.997 42.6211 131.414 42.1541C132.657 40.7704 133.657 39.2311 134.305 37.4727C135.039 35.4779 136.109 33.6734 137.601 32.1398C140.365 29.286 142.568 29.2457 145.355 31.9669C146.453 30.2488 147.373 30.1047 149.026 31.35C149.604 31.7824 149.685 32.1456 149.263 32.8086C147.5 35.6048 146.546 38.6834 146.309 41.9754C146.28 42.3617 146.158 42.8575 146.586 43.0881C147.095 43.3648 147.407 42.8921 147.708 42.6038C149.772 40.6032 150.859 37.9974 152.097 35.4837C152.195 35.2877 152.253 35.0686 152.357 34.8726C152.866 33.9386 153.12 33.2525 151.819 32.5607C150.715 31.9727 150.489 30.6121 150.72 29.4013C151.073 27.5392 152.172 26.1151 153.762 25.0889C154.508 24.6046 155.288 24.5989 156.063 25.0716C156.878 25.5732 157.191 26.2939 157.046 27.2336C156.861 28.4847 156.462 29.6723 156.005 30.8369C155.762 31.4538 155.855 31.7478 156.578 31.6556C157.162 31.5806 157.752 31.5345 158.341 31.448C159.238 31.3212 160.03 31.5114 160.689 32.1571C161.394 32.8432 161.637 33.5235 161.088 34.5036C159.827 36.7694 158.827 39.1446 158.469 41.7448C158.399 42.2463 158.22 42.869 158.781 43.1457C159.301 43.3994 159.648 42.8575 159.972 42.5404C161.279 41.2663 162.377 39.848 163.036 38.1184C163.69 36.3946 164.418 34.6996 164.898 32.9182C164.997 32.5665 165.141 32.2206 165.291 31.8862C166.286 29.6031 167.512 29.6493 169.501 31.3731C169.831 31.6613 170.108 32.0995 169.703 32.5376C167.986 34.4114 167.992 36.5849 168.593 38.8564C168.888 39.9575 169.304 41.0356 169.553 42.1426C170.368 45.792 168.113 49.5279 164.551 50.508C161.724 51.2863 159.191 49.5855 158.891 46.6856C158.856 46.3282 158.989 45.9707 158.347 46.0572C155.404 46.4377 154.097 44.0105 154.716 41.3297C155.265 38.9486 156.312 36.7405 157.364 34.544C157.491 34.2788 157.613 34.0193 157.786 33.6446C156.826 33.7368 155.976 33.9386 155.109 33.8464C154.675 33.8002 154.647 34.2615 154.519 34.544C153.328 37.2133 151.9 39.7442 150.321 42.2002C149.662 43.2264 148.951 44.2123 148.049 45.0483C147.002 46.0168 145.823 46.3224 144.47 45.8727C143.169 45.4461 142.689 44.4199 142.515 43.1688C142.475 42.8863 142.417 42.6038 142.348 42.2463C141.683 43.0765 141.11 43.8779 140.445 44.6043C138.485 46.7432 135.831 46.4665 134.282 43.9817C133.998 43.5262 133.808 43.0074 133.513 42.3962C132.865 43.3014 132.246 44.1604 131.495 44.9041C130.396 45.9938 129.153 46.4492 127.667 45.8612C126.135 45.2558 125.707 43.9644 125.684 42.4654C125.66 40.8569 126.123 39.3349 126.545 37.8071C127.204 35.4318 128.106 33.1315 128.991 30.8023C128.031 30.5486 127.106 30.8138 126.198 30.589C125.776 30.4852 125.614 31.1713 125.348 31.4941C123.816 33.3563 119.872 33.2987 118.3 31.3673C118.34 31.3154 118.386 31.2174 118.421 31.2174C120.491 31.35 121.786 30.1797 122.873 28.623C124.452 26.3515 125.597 23.8955 126.054 21.1513C126.111 20.788 126.152 20.4191 126.135 20.0501C126.065 18.5742 125.4 18.0784 123.949 18.407C122.885 18.6491 121.931 19.1449 121.04 19.7388C116.814 22.5465 113.373 26.1151 110.806 30.4737C108.771 33.9328 109.193 34.9591 112.922 36.3542C114.79 37.0518 116.733 37.5477 118.525 38.4528C121.729 40.0671 123.359 42.2118 119.693 45.5671C117.907 47.2045 115.981 48.5997 113.639 49.3664C112.743 49.6605 111.986 49.5221 111.234 48.9917C110.286 48.3229 109.459 47.5562 108.765 46.6279C108.187 45.8554 108.245 45.1347 108.857 44.4256C109.563 43.5897 110.424 42.9382 111.483 42.5173ZM137.583 41.739C137.618 42.2752 137.52 42.7883 138.005 43.0131C138.52 43.2495 138.832 42.794 139.116 42.4943C141.243 40.2112 142.955 37.6514 144.152 34.7746C144.638 33.61 143.892 32.7567 142.614 32.9182C142.07 32.9873 141.654 33.2987 141.301 33.6734C139.116 35.9622 137.901 38.6949 137.583 41.739ZM162.811 44.8638C162.545 45.0021 162.267 45.1059 162.042 45.2846C161.319 45.8496 160.99 46.6049 161.134 47.5216C161.238 48.1961 161.602 48.6861 162.308 48.8303C163.198 49.0148 163.904 48.6688 164.465 48.0058C165.002 47.3717 165.28 46.6106 165.465 45.815C166.078 43.2495 165.471 40.8108 164.708 38.1934C164.262 39.3637 163.881 40.3553 163.279 41.249C162.684 42.131 162.1 43.0247 161.498 43.924C161.92 44.2123 162.528 44.2815 162.811 44.8638ZM154.988 27.1414C153.814 27.9485 153.132 29.4244 153.444 30.3123C153.513 30.5083 153.652 30.7101 153.814 30.8311C153.941 30.9291 154.063 30.7792 154.12 30.6293C154.525 29.5455 155.15 28.5077 154.988 27.1414Z" fill="white" />
                        <path d="M144.718 70.9575C146.343 74.0074 148.257 76.6882 151.108 78.5734C152.744 79.6573 154.496 80.4068 156.537 79.9686C156.711 79.934 156.913 79.8533 157.017 80.0724C157.104 80.2569 157.006 80.4183 156.907 80.5855C155.519 82.9377 151.287 83.7622 149.136 82.0672C147.274 80.6028 145.962 78.6772 144.776 76.6709C143.787 74.9932 142.851 73.2809 141.798 71.4188C140.63 74.6992 139.376 77.7605 138.994 81.0756C138.878 82.096 138.491 82.4304 137.548 82.0211C135.265 81.0294 134.438 79.9629 135.276 77.6914C136.664 73.9151 138.398 70.2888 140.035 66.6163C141.295 63.7855 142.567 60.9663 143.579 58.0318C143.845 57.265 144.129 56.4983 144.158 55.6796C144.192 54.8552 144.568 54.7514 145.245 55.0512C146.84 55.7603 147.32 56.7346 146.806 58.4008C145.881 61.3987 144.597 64.2641 143.475 67.187C143.342 67.5272 142.937 67.9019 143.365 68.2824C143.707 68.5822 144.146 68.49 144.533 68.3632C144.88 68.2479 145.233 68.098 145.528 67.8846C149.633 64.8118 152.513 60.8972 153.554 55.8237C154.132 53.0045 152.495 51.4364 149.627 51.8342C147.239 52.1628 145.077 53.1198 143.018 54.3075C139.202 56.5098 135.86 59.2771 133.171 62.7882C132.408 63.7855 131.732 64.8406 131.379 66.0744C131.119 66.9737 131.46 67.3139 132.345 67.3024C133.385 67.2851 134.293 66.7201 135.34 66.6105C134.328 67.9308 133.067 68.8417 131.396 69.1011C130.864 69.1818 130.465 68.859 130.159 68.4842C127.603 65.4113 127.574 63.5088 129.633 61.1105C134.6 55.3452 140.665 51.2346 148.084 49.2629C149.957 48.767 151.813 48.8939 153.594 49.7933C156.913 51.4594 158.468 54.4228 157.404 57.9453C155.676 63.676 151.888 67.7751 146.54 70.4387C146.014 70.6693 145.412 70.7557 144.718 70.9575Z" fill="white" />
                        <path d="M116.548 66.1895C115.2 66.3856 114.061 66.6335 113.032 67.4982C111.772 68.5591 110.222 68.634 108.753 67.8845C107.308 67.1466 106.995 65.7456 107.082 64.287C107.267 61.2083 108.713 58.7869 111.297 57.1323C113.31 55.8467 115.894 57.0631 116.374 59.4038C116.738 61.1738 116.311 62.8342 115.582 64.5983C116.75 64.2812 117.588 63.6989 118.005 62.7419C119.589 59.0983 121.491 55.5642 122.052 51.5515C122.133 50.9808 122.37 50.9058 122.873 51.0211C124.365 51.3555 124.833 52.1281 124.325 53.5751C123.139 56.9536 121.671 60.2167 120.318 63.526C120.185 63.8546 120.052 64.189 119.872 64.6387C121.572 64.3965 122.856 63.7278 123.735 62.3672C123.85 62.1884 123.926 61.9117 124.203 61.9867C124.562 62.0847 124.446 62.4018 124.4 62.6324C124.145 63.8661 123.428 64.7828 122.318 65.342C121.844 65.5842 121.78 65.8033 121.798 66.3394C121.861 68.8358 121.237 71.1707 119.653 73.1597C118.727 74.3243 117.565 74.6299 116.409 74.1398C115.38 73.7017 114.917 72.7562 115.073 71.263C115.247 69.5161 115.981 67.9249 116.548 66.1895ZM114.229 60.0322C114.258 59.0694 114.113 58.6255 113.755 58.3891C113.35 58.1182 112.974 58.2623 112.61 58.4583C110.997 59.3289 109.216 63.3934 109.673 65.1518C109.887 65.982 110.592 66.3855 111.355 66.0281C112.032 65.711 112.621 65.2671 112.448 64.3446C112.338 63.7681 112.431 63.1282 112.945 62.8572C114.212 62.1884 114.015 60.9662 114.229 60.0322ZM119.774 67.1466C119.716 66.7834 119.948 66.4144 119.595 66.1838C119.398 66.0627 119.231 66.2241 119.167 66.3971C118.502 68.2189 117.6 69.9658 117.432 71.9375C117.409 72.1739 117.363 72.514 117.692 72.5774C118.01 72.6409 118.097 72.3122 118.207 72.0989C119.005 70.5192 119.537 68.8531 119.774 67.1466Z" fill="white" />
                    </svg>
                    <p className={cl.title}>{t("consciousness")}</p>
                    <p className={cl.text}>{t("consciousnessText")}</p>
                    <audio style={{ margin: "40px 0"}} controls src="/b397eba70529f50.mp3"></audio>
                </div>
                <div className={cl.right}><Image src={head} alt='mint' /><Image className={cl.atoms} src={atoms} alt='atoms' /></div>
            </div>
        </div>
    )
}
