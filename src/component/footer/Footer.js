import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="rishi-footer" id="rishi-footer" itemType="https://schema.org/WPFooter" itemScope="">
                <div className="footer-top-row">
                    <div className="row-wrapper vertical-center">
                        <div className="col-wrapper col-vertical">
                            <div className="rishi-footer-widgets-one" id="rishi-footer-widgets-one">
                                <section id="block-16" className="widget widget_block widget_text">
                                    <p></p>
                                </section>
                                <section id="block-15" className="widget widget_block widget_media_image">
                                    <div className="wp-block-image">
                                        <figure className="aligncenter size-full">
                                            <svg width="134" height="64" viewBox="0 0 134 64" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0.967454 57.4562V59.339H1.82942C2.14589 59.339 2.38358 59.2448 2.54249 59.0572C2.70072 58.8696 2.78018 58.6406 2.78018 58.3709C2.78018 58.0544 2.6847 57.8227 2.49441 57.6758C2.30413 57.5289 2.04975 57.4562 1.73327 57.4562H0.967454ZM0.967454 60.1569V62.0925H1.8648C2.03506 62.0925 2.19463 62.0718 2.34419 62.031C2.49375 61.9903 2.62394 61.9295 2.73544 61.8508C2.84694 61.772 2.93441 61.6705 2.99917 61.5476C3.06394 61.4241 3.09598 61.2806 3.09598 61.1163C3.09598 60.934 3.05793 60.7838 2.98115 60.663C2.90503 60.5428 2.80421 60.4446 2.67802 60.3679C2.55183 60.2917 2.40829 60.237 2.24671 60.205C2.0858 60.1729 1.91955 60.1569 1.74996 60.1569H0.967454ZM0 62.9631V56.5848H1.6892C2.00034 56.5848 2.28143 56.6156 2.53381 56.6777C2.78619 56.7391 2.99984 56.8359 3.17611 56.9674C3.35237 57.0996 3.48857 57.2699 3.58539 57.4775C3.6822 57.6858 3.73027 57.9396 3.73027 58.2387C3.73027 58.4029 3.71425 58.5638 3.6822 58.7221C3.65015 58.8803 3.5974 59.0258 3.52396 59.1574C3.45052 59.2896 3.35371 59.4051 3.23353 59.5052C3.11334 59.6047 2.96512 59.6815 2.78886 59.7336C2.94175 59.763 3.09265 59.813 3.2422 59.8831C3.39176 59.9532 3.5253 60.0487 3.64214 60.1689C3.75965 60.2891 3.85446 60.4373 3.9279 60.6136C4.00135 60.7892 4.03807 60.9975 4.03807 61.2385C4.03807 61.5436 3.97931 61.8047 3.86247 62.0217C3.74496 62.2387 3.58939 62.4176 3.39644 62.5585C3.20281 62.6994 2.97981 62.8022 2.7281 62.8663C2.47572 62.931 2.21466 62.9631 1.94492 62.9631H0ZM7.63614 59.7783C7.63614 59.3383 7.7216 58.9204 7.89119 58.5251C8.06145 58.1292 8.29446 57.782 8.59091 57.4822C8.88735 57.1831 9.23187 56.9467 9.62446 56.7738C10.0177 56.6009 10.4397 56.5141 10.8917 56.5141C11.337 56.5141 11.7583 56.6009 12.1543 56.7738C12.5502 56.9467 12.896 57.1831 13.1925 57.4822C13.4889 57.7813 13.7233 58.1285 13.8962 58.5251C14.0691 58.921 14.1559 59.339 14.1559 59.7783C14.1559 60.2303 14.0691 60.6523 13.8962 61.0455C13.7233 61.4381 13.4889 61.7827 13.1925 62.0791C12.896 62.3749 12.5502 62.6086 12.1543 62.7788C11.7583 62.9491 11.3377 63.0339 10.8917 63.0339C10.4397 63.0339 10.0177 62.9491 9.62446 62.7788C9.23187 62.6086 8.88735 62.3755 8.59091 62.0791C8.29513 61.7827 8.06145 61.4381 7.89119 61.0455C7.7216 60.6523 7.63614 60.2303 7.63614 59.7783ZM8.59491 59.787C8.59491 60.1095 8.655 60.4133 8.77518 60.6977C8.89536 60.9821 9.06095 61.2298 9.27193 61.4408C9.48291 61.6525 9.72929 61.8194 10.011 61.9422C10.2928 62.0657 10.5919 62.1272 10.9084 62.1272C11.2249 62.1272 11.5226 62.0657 11.8011 61.9422C12.0795 61.8194 12.3232 61.6525 12.5308 61.4408C12.7391 61.2298 12.9034 60.9821 13.0236 60.6977C13.1437 60.4133 13.2038 60.1068 13.2038 59.7783C13.2038 59.4558 13.1437 59.1527 13.0236 58.8676C12.9034 58.5832 12.7378 58.3355 12.5268 58.1245C12.3152 57.9135 12.0708 57.7466 11.7924 57.6231C11.514 57.4996 11.2162 57.4381 10.8997 57.4381C10.5832 57.4381 10.2841 57.4996 10.0024 57.6231C9.7206 57.7466 9.47624 57.9135 9.26793 58.1245C9.05961 58.3361 8.89536 58.5852 8.77518 58.8723C8.655 59.1594 8.59491 59.4645 8.59491 59.787ZM17.6826 59.7783C17.6826 59.3383 17.768 58.9204 17.9376 58.5251C18.1079 58.1292 18.3409 57.782 18.6373 57.4822C18.9338 57.1831 19.2783 56.9467 19.6709 56.7738C20.0641 56.6009 20.4861 56.5141 20.9381 56.5141C21.3835 56.5141 21.8048 56.6009 22.2007 56.7738C22.5966 56.9467 22.9425 57.1831 23.2389 57.4822C23.5354 57.7813 23.7697 58.1285 23.9426 58.5251C24.1156 58.921 24.2024 59.339 24.2024 59.7783C24.2024 60.2303 24.1156 60.6523 23.9426 61.0455C23.7697 61.4381 23.5354 61.7827 23.2389 62.0791C22.9425 62.3749 22.5966 62.6086 22.2007 62.7788C21.8048 62.9491 21.3841 63.0339 20.9381 63.0339C20.4861 63.0339 20.0641 62.9491 19.6709 62.7788C19.2783 62.6086 18.9338 62.3755 18.6373 62.0791C18.3416 61.7827 18.1079 61.4381 17.9376 61.0455C17.768 60.6523 17.6826 60.2303 17.6826 59.7783ZM18.6413 59.787C18.6413 60.1095 18.7014 60.4133 18.8216 60.6977C18.9418 60.9821 19.1074 61.2298 19.3184 61.4408C19.5293 61.6525 19.7757 61.8194 20.0575 61.9422C20.3392 62.0657 20.6383 62.1272 20.9548 62.1272C21.2713 62.1272 21.5691 62.0657 21.8475 61.9422C22.1259 61.8194 22.3696 61.6525 22.5773 61.4408C22.7856 61.2298 22.9498 60.9821 23.07 60.6977C23.1902 60.4133 23.2503 60.1068 23.2503 59.7783C23.2503 59.4558 23.1902 59.1527 23.07 58.8676C22.9498 58.5832 22.7842 58.3355 22.5732 58.1245C22.3616 57.9135 22.1172 57.7466 21.8388 57.6231C21.5604 57.4996 21.2626 57.4381 20.9461 57.4381C20.6297 57.4381 20.3305 57.4996 20.0488 57.6231C19.767 57.7466 19.5227 57.9135 19.3144 58.1245C19.106 58.3361 18.9418 58.5852 18.8216 58.8723C18.7014 59.1594 18.6413 59.4645 18.6413 59.787ZM31.9607 62.9631C31.7557 62.6994 31.5588 62.447 31.3711 62.2066C31.1835 61.9663 30.9986 61.7259 30.817 61.4855C30.6347 61.2452 30.4518 61.0022 30.2675 60.7558C30.0825 60.5094 29.8876 60.2544 29.6826 59.9906C29.6065 60.0728 29.533 60.1475 29.4629 60.215C29.3928 60.2824 29.316 60.3512 29.2346 60.4219C29.2346 60.8733 29.2359 61.2973 29.2386 61.6932C29.2413 62.0891 29.2433 62.5131 29.2433 62.9644H28.179V56.5862H29.2433V58.9704C29.2433 59.0232 29.2386 59.0746 29.2299 59.1247C29.2212 59.1747 29.2166 59.2262 29.2166 59.2782C29.2459 59.2375 29.2753 59.2008 29.3047 59.1681C29.3341 59.136 29.3635 59.096 29.3928 59.0492C29.8095 58.656 30.2107 58.2473 30.598 57.822C30.9852 57.3967 31.3865 56.9848 31.8031 56.5862H33.0256C32.5856 57.0435 32.1503 57.5042 31.719 57.9676C31.2877 58.431 30.8524 58.891 30.4124 59.3483C30.6587 59.6648 30.8951 59.9719 31.1208 60.2677C31.3464 60.5642 31.5694 60.8586 31.7891 61.1517C32.0088 61.4448 32.2304 61.7413 32.4534 62.0404C32.6764 62.3395 32.9081 62.6473 33.1485 62.9644H31.9607V62.9631ZM44.5503 60.8606V62.9631H43.5828V60.8606C43.5421 60.7958 43.4613 60.6556 43.3411 60.4386C43.2209 60.2216 43.0801 59.9653 42.9192 59.6688C42.7576 59.3724 42.5846 59.0572 42.3997 58.7227C42.2148 58.3882 42.0418 58.0731 41.8809 57.7773C41.72 57.4809 41.5785 57.2245 41.4583 57.0075C41.3381 56.7905 41.2573 56.6496 41.2166 56.5848H42.3076C42.3603 56.673 42.4545 56.8419 42.5893 57.0909C42.7242 57.34 42.8737 57.6217 43.038 57.9355C43.2022 58.2493 43.3692 58.5658 43.5394 58.8856C43.7097 59.2048 43.8532 59.4792 43.9707 59.7082L44.0675 59.9986C44.0909 59.9519 44.1116 59.9032 44.129 59.8538C44.147 59.8037 44.1644 59.7556 44.1817 59.7089C44.3052 59.4805 44.4488 59.2061 44.613 58.8863C44.7773 58.5665 44.9402 58.25 45.1011 57.9362C45.262 57.6224 45.4089 57.3407 45.5411 57.0916C45.6726 56.8426 45.7654 56.6736 45.8182 56.5855H46.9005L44.5516 60.8613L44.5503 60.8606ZM49.7668 59.7783C49.7668 59.3383 49.8522 58.9204 50.0218 58.5251C50.1921 58.1292 50.4251 57.782 50.7215 57.4822C51.018 57.1831 51.3625 56.9467 51.7551 56.7738C52.1483 56.6009 52.5703 56.5141 53.0223 56.5141C53.4677 56.5141 53.889 56.6009 54.2849 56.7738C54.6808 56.9467 55.0267 57.1831 55.3231 57.4822C55.6196 57.7813 55.8539 58.1285 56.0268 58.5251C56.1998 58.921 56.2866 59.339 56.2866 59.7783C56.2866 60.2303 56.1998 60.6523 56.0268 61.0455C55.8539 61.4381 55.6196 61.7827 55.3231 62.0791C55.0267 62.3749 54.6808 62.6086 54.2849 62.7788C53.889 62.9491 53.4683 63.0339 53.0223 63.0339C52.5703 63.0339 52.1483 62.9491 51.7551 62.7788C51.3625 62.6086 51.018 62.3755 50.7215 62.0791C50.4258 61.7827 50.1921 61.4381 50.0218 61.0455C49.8522 60.6523 49.7668 60.2303 49.7668 59.7783ZM50.7255 59.787C50.7255 60.1095 50.7856 60.4133 50.9058 60.6977C51.026 60.9821 51.1916 61.2298 51.4026 61.4408C51.6136 61.6525 51.8599 61.8194 52.1417 61.9422C52.4234 62.0657 52.7225 62.1272 53.039 62.1272C53.3555 62.1272 53.6533 62.0657 53.9317 61.9422C54.2101 61.8194 54.4538 61.6525 54.6615 61.4408C54.8698 61.2298 55.034 60.9821 55.1542 60.6977C55.2744 60.4133 55.3345 60.1068 55.3345 59.7783C55.3345 59.4558 55.2744 59.1527 55.1542 58.8676C55.034 58.5832 54.8684 58.3355 54.6575 58.1245C54.4458 57.9135 54.2014 57.7466 53.923 57.6231C53.6446 57.4996 53.3468 57.4381 53.0303 57.4381C52.7139 57.4381 52.4148 57.4996 52.133 57.6231C51.8512 57.7466 51.6069 57.9135 51.3986 58.1245C51.1902 58.3361 51.026 58.5852 50.9058 58.8723C50.7856 59.1594 50.7255 59.4645 50.7255 59.787ZM62.6194 63.0332C62.2789 63.0332 61.9624 62.9771 61.6693 62.8663C61.3762 62.7548 61.1198 62.5979 60.8995 62.3956C60.6798 62.1933 60.5062 61.9496 60.3801 61.6651C60.2539 61.3807 60.1911 61.0622 60.1911 60.7104V56.5842H61.1586V60.6837C61.1586 60.8886 61.1953 61.0783 61.2687 61.2512C61.3415 61.4241 61.4443 61.577 61.5765 61.7085C61.708 61.8407 61.8623 61.9429 62.0379 62.0163C62.2141 62.0898 62.4078 62.1265 62.6188 62.1265C62.8244 62.1265 63.016 62.0898 63.195 62.0163C63.3739 61.9429 63.5295 61.8407 63.661 61.7085C63.7925 61.577 63.8967 61.4241 63.9735 61.2512C64.0496 61.0783 64.0876 60.8893 64.0876 60.6837V56.5842H65.0551V60.7104C65.0551 61.0622 64.9923 61.3807 64.8661 61.6651C64.7399 61.9496 64.567 62.1933 64.3467 62.3956C64.127 62.5979 63.8686 62.7548 63.5728 62.8663C63.2764 62.9778 62.9586 63.0332 62.6181 63.0332H62.6194ZM69.411 62.9631V56.5848H71.1529C71.4874 56.5848 71.7939 56.6289 72.0723 56.717C72.3507 56.8052 72.5911 56.9354 72.7934 57.1083C72.9957 57.2812 73.1526 57.4922 73.2641 57.7412C73.3756 57.9903 73.431 58.2767 73.431 58.5992C73.431 58.7748 73.4136 58.9497 73.3783 59.1227C73.3429 59.2956 73.2861 59.4632 73.2067 59.6241C73.1279 59.785 73.0264 59.9352 72.9035 60.0728C72.78 60.2103 72.6305 60.3265 72.4549 60.4206C72.6892 60.7898 72.9443 61.1991 73.22 61.6478C73.4958 62.0965 73.7742 62.5351 74.0559 62.9631H72.9035C72.786 62.7815 72.6645 62.5905 72.5383 62.3916C72.4121 62.1919 72.2859 61.9943 72.1604 61.7973C72.0342 61.601 71.9114 61.4074 71.7905 61.2171C71.6703 61.0269 71.5575 60.8493 71.452 60.685H70.3784V62.9638L69.411 62.9631ZM70.3784 59.7783H71.2497C71.4841 59.7783 71.681 59.7389 71.8393 59.6595C71.9975 59.5807 72.1224 59.4825 72.2132 59.365C72.304 59.2475 72.3687 59.1213 72.4068 58.9865C72.4448 58.8516 72.4635 58.7287 72.4635 58.6172C72.4635 58.5057 72.4448 58.3842 72.4068 58.252C72.3687 58.1198 72.3026 57.997 72.2085 57.8821C72.1143 57.768 71.9902 57.6725 71.8346 57.5964C71.679 57.5203 71.4867 57.4822 71.2584 57.4822H70.3784V59.7783ZM86.6802 56.9367L86.3371 57.7199C86.0967 57.6318 85.8577 57.5616 85.62 57.5089C85.3823 57.4562 85.1553 57.4295 84.9383 57.4295C84.5684 57.4295 84.274 57.5056 84.0543 57.6585C83.8346 57.8107 83.7245 58.0043 83.7245 58.2393C83.7245 58.4383 83.8033 58.5985 83.9622 58.7187C84.1204 58.8389 84.3167 58.9471 84.5517 59.0439C84.7861 59.1407 85.0418 59.2375 85.3169 59.3343C85.5926 59.4311 85.8477 59.556 86.082 59.7082C86.317 59.8611 86.5133 60.0527 86.6716 60.2844C86.8298 60.5161 86.9093 60.8139 86.9093 61.1771C86.9093 61.4588 86.8578 61.7125 86.755 61.9382C86.6529 62.1639 86.5 62.3589 86.2977 62.5231C86.0954 62.6873 85.843 62.8135 85.5412 62.9017C85.2387 62.9898 84.8855 63.0332 84.4809 63.0332C84.2232 63.0332 83.9895 63.0158 83.7812 62.9805C83.5729 62.9451 83.3853 62.8997 83.2184 62.8442C83.0515 62.7882 82.9046 62.7287 82.7784 62.664C82.6522 62.5992 82.5454 62.5411 82.4572 62.4884L82.8799 61.6525C83.1142 61.7873 83.3753 61.8955 83.663 61.9776C83.9501 62.0597 84.2112 62.1011 84.4462 62.1011C84.5637 62.1011 84.7086 62.0864 84.8815 62.0571C85.0545 62.0277 85.22 61.9763 85.379 61.9028C85.5372 61.8294 85.6734 61.7312 85.7882 61.6077C85.9024 61.4842 85.9598 61.3293 85.9598 61.1417C85.9598 60.9714 85.9144 60.8266 85.8236 60.7064C85.7328 60.5862 85.6126 60.4807 85.4631 60.3899C85.3135 60.2991 85.1439 60.217 84.953 60.1435C84.7627 60.0701 84.5671 59.994 84.3681 59.9152C84.1685 59.8357 83.9735 59.7523 83.7832 59.6641C83.5929 59.576 83.4227 59.4692 83.2731 59.343C83.1236 59.2168 83.0034 59.0699 82.9126 58.903C82.8218 58.7361 82.7764 58.5351 82.7764 58.3001C82.7764 58.0831 82.8204 57.8688 82.9086 57.6578C82.9967 57.4461 83.1282 57.2585 83.3045 57.0949C83.4808 56.9307 83.6991 56.7985 83.9602 56.699C84.2212 56.5995 84.5243 56.5495 84.8709 56.5495C85.0818 56.5495 85.2888 56.5668 85.4911 56.6022C85.6934 56.6376 85.877 56.677 86.0406 56.7211C86.2049 56.7651 86.3444 56.8072 86.4586 56.8486C86.5727 56.89 86.6475 56.9187 86.6829 56.9367H86.6802ZM90.8585 62.9631V56.5848H95.0461V57.4562H91.8266V59.3216H94.6949V60.2103H91.8266V62.0751H95.1697V62.9638L90.8585 62.9631ZM99.1456 62.9631V56.5848H100.888C101.222 56.5848 101.529 56.6289 101.807 56.717C102.085 56.8052 102.326 56.9354 102.528 57.1083C102.73 57.2812 102.887 57.4922 102.999 57.7412C103.11 57.9903 103.166 58.2767 103.166 58.5992C103.166 58.7748 103.148 58.9497 103.113 59.1227C103.078 59.2956 103.021 59.4632 102.941 59.6241C102.863 59.785 102.761 59.9352 102.638 60.0728C102.515 60.2103 102.365 60.3265 102.19 60.4206C102.424 60.7898 102.679 61.1991 102.955 61.6478C103.23 62.0965 103.509 62.5351 103.791 62.9631H102.638C102.521 62.7815 102.399 62.5905 102.273 62.3916C102.147 62.1919 102.021 61.9943 101.895 61.7973C101.769 61.601 101.646 61.4074 101.525 61.2171C101.405 61.0269 101.292 60.8493 101.187 60.685H100.113V62.9638L99.1456 62.9631ZM100.113 59.7783H100.984C101.219 59.7783 101.416 59.7389 101.574 59.6595C101.732 59.5807 101.857 59.4825 101.948 59.365C102.039 59.2475 102.103 59.1213 102.141 58.9865C102.18 58.8516 102.198 58.7287 102.198 58.6172C102.198 58.5057 102.18 58.3842 102.141 58.252C102.103 58.1198 102.037 57.997 101.943 57.8821C101.849 57.768 101.725 57.6725 101.569 57.5964C101.414 57.5203 101.221 57.4822 100.993 57.4822H100.113V59.7783ZM107.45 56.5848C107.491 56.6843 107.558 56.8472 107.652 57.0729C107.747 57.2986 107.853 57.5556 107.974 57.8427C108.094 58.1298 108.22 58.435 108.351 58.7574C108.484 59.0799 108.609 59.3851 108.725 59.6721C108.843 59.9592 108.948 60.2163 109.042 60.442C109.136 60.6676 109.203 60.8306 109.244 60.93C109.25 60.9414 109.265 60.9828 109.288 61.0529C109.312 61.123 109.33 61.1851 109.341 61.2378L109.429 60.93C109.47 60.8306 109.538 60.6676 109.631 60.442C109.726 60.2163 109.831 59.9592 109.948 59.6721C110.065 59.3851 110.19 59.0799 110.322 58.7574C110.454 58.435 110.58 58.1298 110.7 57.8427C110.821 57.5556 110.927 57.2986 111.021 57.0729C111.116 56.8472 111.182 56.6843 111.224 56.5848H112.174C112.138 56.667 112.076 56.8152 111.985 57.0295C111.894 57.2438 111.784 57.5029 111.655 57.808C111.526 58.1131 111.384 58.4476 111.228 58.8109C111.073 59.1747 110.915 59.544 110.753 59.9192C110.592 60.2944 110.434 60.6643 110.278 61.0275C110.123 61.3907 109.982 61.7252 109.856 62.0304C109.73 62.3355 109.621 62.5945 109.531 62.8089C109.44 63.0232 109.377 63.1707 109.342 63.2535L106.5 56.5848H107.45ZM115.833 56.5848H116.793V62.9631H115.833V56.5848ZM125.951 62.5057C125.88 62.5585 125.782 62.6159 125.655 62.6773C125.529 62.7388 125.381 62.7962 125.211 62.8489C125.041 62.9017 124.852 62.9457 124.643 62.9805C124.435 63.0158 124.214 63.0332 123.979 63.0332C123.48 63.0332 123.033 62.9471 122.637 62.7735C122.241 62.6006 121.905 62.3675 121.629 62.0738C121.354 61.7807 121.143 61.4401 120.996 61.0529C120.85 60.6663 120.777 60.2557 120.777 59.8217C120.777 59.341 120.863 58.8977 121.037 58.493C121.209 58.0884 121.446 57.7392 121.744 57.4461C122.043 57.153 122.394 56.924 122.796 56.7598C123.198 56.5955 123.624 56.5134 124.076 56.5134C124.246 56.5134 124.419 56.5254 124.595 56.5488C124.771 56.5722 124.937 56.6042 125.092 56.6456C125.248 56.6863 125.385 56.7351 125.505 56.7905C125.625 56.8459 125.718 56.9033 125.782 56.9621C125.736 57.0322 125.699 57.0909 125.672 57.1377C125.645 57.1844 125.618 57.2332 125.589 57.2826C125.559 57.3326 125.527 57.3894 125.492 57.4542C125.457 57.5189 125.41 57.6037 125.351 57.7092C125.275 57.6565 125.185 57.6124 125.083 57.577C124.98 57.5416 124.873 57.5122 124.761 57.4889C124.65 57.4655 124.537 57.4475 124.423 57.4361C124.309 57.4241 124.205 57.4188 124.11 57.4188C123.77 57.4188 123.455 57.4815 123.164 57.6077C122.874 57.7339 122.624 57.9035 122.413 58.1178C122.201 58.3321 122.035 58.5798 121.915 58.8616C121.795 59.1434 121.735 59.4365 121.735 59.7409C121.735 60.04 121.792 60.3278 121.906 60.6029C122.021 60.8786 122.179 61.125 122.381 61.342C122.584 61.559 122.827 61.7319 123.112 61.8614C123.396 61.9903 123.709 62.0551 124.048 62.0551C124.23 62.0551 124.406 62.037 124.577 62.0023C124.747 61.9669 124.9 61.9262 125.038 61.8788C125.176 61.8321 125.29 61.7847 125.381 61.7379C125.472 61.6912 125.526 61.6558 125.544 61.6324L125.949 62.5037L125.951 62.5057ZM129.689 62.9631V56.5848H133.876V57.4562H130.657V59.3216H133.525V60.2103H130.657V62.0751H134V62.9638L129.689 62.9631Z"
                                                    fill="#ffffff"/>
                                                <path
                                                    d="M10.415 44.9417C8.85664 44.9417 7.43651 44.6359 6.15458 44.0243C4.87199 43.4127 3.77768 42.6089 2.87031 41.6127C1.96295 40.6165 1.25789 39.4775 0.754467 38.1949C0.251044 36.913 0 35.591 0 34.2303C0 32.8495 0.261059 31.5182 0.783844 30.2363C1.30663 28.9544 2.03639 27.8247 2.97313 26.8485C3.90987 25.8724 5.01954 25.0932 6.30213 24.511C7.58406 23.9288 8.98483 23.6384 10.5038 23.6384C12.0621 23.6384 13.4823 23.9442 14.7642 24.5557C16.0468 25.1673 17.1411 25.9759 18.0484 26.9821C18.9558 27.9882 19.6562 29.132 20.1489 30.4139C20.6423 31.6958 20.8887 32.9978 20.8887 34.3197C20.8887 35.7005 20.6277 37.0318 20.1049 38.3138C19.5821 39.5957 18.8577 40.7254 17.9303 41.7015C17.0035 42.6776 15.8986 43.4622 14.6166 44.0537C13.3347 44.6453 11.9339 44.9417 10.415 44.9417ZM4.94142 34.2904C4.94142 35.0989 5.0596 35.8834 5.29662 36.6426C5.53365 37.4017 5.88351 38.0774 6.34687 38.6689C6.81023 39.2605 7.3871 39.7339 8.07747 40.0891C8.76784 40.4443 9.55702 40.6219 10.4444 40.6219C11.3711 40.6219 12.1803 40.4343 12.8707 40.0597C13.561 39.6851 14.1332 39.1964 14.5866 38.5948C15.0406 37.9933 15.3804 37.3129 15.6074 36.5531C15.8345 35.794 15.948 35.0195 15.948 34.2303C15.948 33.4217 15.8298 32.6379 15.5928 31.8781C15.3557 31.1183 15.0012 30.4479 14.5278 29.8657C14.0544 29.2835 13.4776 28.8202 12.7972 28.475C12.1169 28.1298 11.3324 27.9575 10.445 27.9575C9.5183 27.9575 8.71443 28.1398 8.0334 28.505C7.35305 28.8702 6.78085 29.3483 6.31749 29.9398C5.85413 30.5314 5.50894 31.2071 5.28194 31.9662C5.05493 32.7254 4.94142 33.4999 4.94142 34.289V34.2904ZM23.4339 47.1016C23.8285 47.2398 24.1984 47.3386 24.5435 47.3974C24.8887 47.4568 25.1992 47.4862 25.4756 47.4862C26.0478 47.4862 26.4918 47.2892 26.8069 46.8946C27.1227 46.5001 27.4085 45.7903 27.6649 44.7641L21.7473 29.2308H26.6293L30.2388 40.7107L33.3454 29.2308H37.7834L31.8659 47.2792C31.4519 48.5611 30.7121 49.602 29.6465 50.4006C28.5816 51.1998 27.319 51.599 25.8595 51.599C25.4649 51.599 25.0657 51.5643 24.661 51.4956C24.2571 51.4261 23.8478 51.3133 23.4332 51.155L23.4339 47.1016ZM46.5419 45.0599C45.24 45.0599 44.0715 44.8482 43.036 44.4236C42.0004 43.9996 41.1224 43.4228 40.4027 42.693C39.6829 41.9632 39.1355 41.12 38.7602 40.1632C38.3857 39.2064 38.1981 38.2056 38.1981 37.16C38.1981 36.0357 38.3857 34.9754 38.7602 33.9792C39.1348 32.9831 39.6776 32.1104 40.388 31.3606C41.0977 30.6108 41.9711 30.0193 43.0066 29.5853C44.0422 29.1513 45.2206 28.9343 46.5426 28.9343C47.8639 28.9343 49.0377 29.1513 50.0632 29.5853C51.0887 30.0193 51.9567 30.6062 52.6671 31.3453C53.3775 32.0851 53.915 32.9383 54.2795 33.9045C54.6448 34.8712 54.827 35.8868 54.827 36.9517C54.827 37.2275 54.817 37.4992 54.7977 37.7656C54.7776 38.032 54.7482 38.2637 54.7089 38.4606H43.2289C43.3077 39.5062 43.6876 40.3001 44.368 40.8429C45.0483 41.385 45.8228 41.6561 46.6908 41.6561C47.3812 41.6561 48.0468 41.4885 48.6878 41.1534C49.3288 40.8182 49.7581 40.3642 49.9751 39.792L53.9991 40.9163C53.3875 42.1395 52.4408 43.1357 51.1582 43.9048C49.8763 44.674 48.3373 45.0586 46.5426 45.0586L46.5419 45.0599ZM49.8262 35.5329C49.7274 34.5468 49.3728 33.7676 48.7613 33.1954C48.1497 32.6232 47.3905 32.3374 46.4832 32.3374C45.5564 32.3374 44.792 32.6285 44.1904 33.2101C43.5888 33.7916 43.239 34.5661 43.1401 35.5322L49.8262 35.5329Z"
                                                    fill="#FF9D00"/>
                                                <path
                                                    d="M84.2856 47.2872C82.4475 47.2872 81.0581 46.7144 80.1167 45.5687C79.1753 44.4229 78.7046 42.7384 78.7046 40.5144V29.0786H84.1501V39.3226C84.1501 40.4116 84.3658 41.2455 84.7964 41.8244C85.2277 42.4026 85.84 42.6923 86.6345 42.6923C87.3603 42.6923 88.064 42.4994 88.7443 42.1135C89.4247 41.7276 90.0263 41.0585 90.5484 40.1058V29.0786H95.9939V40.8202C95.9939 41.3643 96.0794 41.7449 96.2489 41.9606C96.4192 42.1762 96.7196 42.3064 97.151 42.3518V46.9467C96.6295 47.0602 96.1868 47.1337 95.8236 47.1677C95.4604 47.2018 95.1319 47.2191 94.8368 47.2191C92.8852 47.2191 91.7735 46.4587 91.5011 44.9384L91.399 43.8494C90.5818 45.0292 89.5669 45.8972 88.3524 46.4533C87.1386 47.0095 85.7832 47.2872 84.2856 47.2872ZM107.259 47.2872C105.739 47.2872 104.241 47.0435 102.766 46.5555C101.291 46.0674 100.043 45.3583 99.0224 44.4283L100.963 41.0926C102.052 41.8411 103.113 42.4199 104.145 42.8279C105.177 43.2365 106.17 43.4408 107.123 43.4408C107.826 43.4408 108.37 43.3159 108.756 43.0662C109.142 42.8165 109.335 42.454 109.335 41.9773C109.335 41.5005 109.092 41.1206 108.604 40.8369C108.115 40.5531 107.259 40.2527 106.034 39.9349C104.831 39.5944 103.816 39.2659 102.987 38.948C102.159 38.6302 101.484 38.2784 100.962 37.8931C100.44 37.5072 100.066 37.0652 99.839 36.5658C99.612 36.0664 99.4985 35.4768 99.4985 34.7958C99.4985 33.8884 99.6801 33.0599 100.043 32.3114C100.407 31.5629 100.905 30.9273 101.541 30.4052C102.176 29.8838 102.93 29.4751 103.804 29.18C104.678 28.8849 105.625 28.7374 106.646 28.7374C107.985 28.7374 109.238 28.919 110.407 29.2815C111.575 29.6447 112.704 30.3024 113.793 31.2558L111.683 34.5227C110.663 33.8197 109.755 33.3089 108.961 32.9911C108.167 32.6733 107.395 32.5144 106.647 32.5144C106.057 32.5144 105.558 32.6332 105.149 32.8716C104.74 33.1099 104.537 33.4898 104.537 34.012C104.537 34.5114 104.758 34.8859 105.2 35.135C105.643 35.3847 106.466 35.6564 107.668 35.9515C108.939 36.2921 110.011 36.6319 110.884 36.9724C111.758 37.3129 112.467 37.6928 113.011 38.1128C113.556 38.5328 113.953 39.0148 114.203 39.559C114.452 40.1038 114.577 40.7501 114.577 41.4992C114.577 43.2685 113.919 44.676 112.603 45.7196C111.287 46.7631 109.506 47.2852 107.259 47.2852L107.259 47.2872ZM116.993 49.6354C117.447 49.7943 117.872 49.9078 118.269 49.976C118.666 50.0441 119.023 50.0781 119.341 50.0781C119.999 50.0781 120.509 49.8511 120.873 49.3977C121.236 48.9437 121.564 48.1272 121.859 46.9474L115.053 29.0792H120.668L124.821 42.2844L128.394 29.0792H133.499L126.692 49.8404C126.215 51.3153 125.365 52.5124 124.14 53.4311C122.914 54.3499 121.462 54.8092 119.783 54.8092C119.329 54.8092 118.87 54.7691 118.405 54.6897C117.94 54.6102 117.469 54.48 116.993 54.2984V49.6354Z"
                                                    fill="#ffffff"/>
                                                <path
                                                    d="M67.8851 47.3566C66.5237 47.3566 65.3326 47.0675 64.3117 46.4886C63.2908 45.9098 62.485 45.0986 61.8954 44.055V47.0161H57.165V11.7979H62.6105V32.075C63.2 31.0541 63.9885 30.2542 64.976 29.6754C65.9628 29.0965 67.1259 28.8074 68.4646 28.8074C69.599 28.8074 70.6425 29.0511 71.596 29.5392C72.5487 30.0272 73.366 30.6909 74.0463 31.5302C74.7267 32.3701 75.2602 33.3623 75.6461 34.508C76.032 35.6537 76.2249 36.8735 76.2249 38.1668C76.2249 39.4601 76.0153 40.6686 75.5953 41.7916C75.1754 42.9146 74.5918 43.8901 73.8427 44.7186C73.0936 45.5466 72.2089 46.1935 71.188 46.6589C70.1672 47.1243 69.0668 47.3566 67.8864 47.3566H67.8851ZM66.3534 42.7617C66.9891 42.7617 67.5673 42.6429 68.0894 42.4045C68.6115 42.1661 69.0595 41.843 69.4334 41.4344C69.808 41.0258 70.1031 40.5437 70.3187 39.9882C70.5344 39.432 70.6419 38.8251 70.6419 38.1675C70.6419 37.5325 70.5397 36.9256 70.3354 36.3467C70.1311 35.7679 69.8534 35.2631 69.5015 34.8318C69.1496 34.4005 68.7243 34.0606 68.2249 33.8109C67.7255 33.5612 67.1927 33.4364 66.6252 33.4364C65.7632 33.4364 64.9747 33.7315 64.2596 34.321C63.5452 34.9112 62.9944 35.6484 62.6091 36.533V40.2773C62.9724 41.0485 63.4998 41.6554 64.1915 42.098C64.8832 42.5407 65.6043 42.7617 66.3534 42.7617Z"
                                                    fill="#ffffff"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M48.2869 24.2689L81.4607 0.805664L110.755 24.8411L81.4514 7.75227L49.7511 27.1078H24.7175L48.2869 24.2689Z"
                                                      fill="#ffffff"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M116.385 27.1732H133.81L110.988 6.82397L84.765 0.816945L116.385 27.1732Z"
                                                      fill="#FF9D00"/>
                                            </svg>
                                        </figure>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-middle-row">
                    <div className="row-wrapper vertical-center">
                        <div className="col-wrapper col-vertical">
                            <nav id="footer-site-navigation"
                                 className="rishi-footer-navigation vertical-flex-start horizontal-center">
                                <ul id="menu-menu-3" className="rishi-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-120 current_page_item menu-item-124">
                                        <a href="#" aria-current="page">Home</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-87">
                                        <a
                                            href="#">Fashion</a>
                                    </li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-88">
                                        <a
                                            href="#">Technology</a>
                                    </li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-287">
                                        <a
                                            href="#">Life
                                            Style</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-90">
                                        <a
                                            href="#">Environment</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-row">
                    <div className="row-wrapper vertical-flex-start">
                        <div className="col-wrapper col-vertical">
                            <div id="rishi-copyrights" className=" horizontal-center vertical-flex-start">
                                <div className="rishi-footer-copyrights">
                                    Copyright © 2024 <a href="#">Magazine</a> -
                                    Powered by <a
                                    href="#/" target="_blank"
                                    rel="noopener noreferrer nofollow">Kshitij
                                    Theme</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;