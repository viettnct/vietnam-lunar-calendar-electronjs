import React from "react";
import ReactDOM from "react-dom";
import '../../../styles.css';

const Tailwind: React.FC = () => {
    return (
        <div>
            <style dangerouslySetInnerHTML={{ __html: "\n    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,700;1,200;1,700&display=swap');\n\nbody\n{\n    font-family: 'Montserrat', sans-serif;\n    background-color: white;\n}\n\n.seccion\n{\n    text-transform: uppercase;\n    -webkit-transform: rotate(270deg);\n    -moz-transform: rotate(270deg);\n    -ms-transform: rotate(270deg);\n    -o-transform: rotate(270deg);\n    transform: rotate(270deg);\n    -webkit-transform-origin: 0 0;\n    -moz-transform-origin: 0 0;\n    -ms-transform-origin: 0 0;\n    -o-transform-origin: 0 0;\n    transform-origin: 0 0;\n    top: 60%;\n}\n" }} />
            <div className="p-4 md:p-10 bg-white">
                <div className="flex justify-center text-xl font-bold tracking-widest text-gray-300">
                    <h1>CURRICULUM VITAE EXTENDIDO</h1>
                </div>
                <div className="grid col-span-1 md:flex items-center mt-10 justify-center">
                    <div className="mr-14">
                        <img className="md:w-40" src="https://i.imgur.com/HvlloWd.png" alt="Logo" />
                    </div>
                    <div className="md:mr-4">
                        <img className="md:w-40" src="https://i.imgur.com/xUbzfdw.png" alt="" />
                    </div>
                    <div className="md:border-l-2 pl-4 p-2 col-span-2 text-justify md:w-1/2 mt-10 md:mt-0">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex urna, lobortis nec venenatis sed, fringilla at nibh.
              </p>
                        <p className="mt-4">
                            Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh.
              </p>
                    </div>
                </div>
                <div className="grid col-span-1 md:flex items-center justify-center mt-20">
                    <div>
                        <div className="md:flex items-center mb-4">
                            <div className="flex items-center md:mr-8 mb-4 md:mb-0">
                                <i className="fas fa-envelope-open-text fa-2x mr-2" />
                                <p>matias@icodeart.cl</p>
                            </div>
                            <div className="flex items-center">
                                <i className="fab fa-github fa-2x mr-2" />
                                <p><b>github.com/</b>mkdirmatias</p>
                            </div>
                        </div>
                        <div className="md:flex items-center">
                            <div className="flex items-center md:mr-7">
                                <i className="fas fa-phone-alt fa-2x mr-2 mb-4 md:mb-0" />
                                <p>+5 6 9 3 2 6 8 8 8 2 4 </p>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-globe fa-2x mr-2" />
                                <p> icodeart.cl</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center md:ml-12 pt-10 md:pt-0">
                        <div className="md:flex">
                            <div className="flex items-center mb-4 md:mb-0">
                                <p className="font-bold mr-2 p-2 border rounded-full">ES</p>
                                <p>NATIVO</p>
                            </div>
                            <div className="flex items-center md:ml-10">
                                <p className="font-bold mr-2 p-2 border rounded-full">EN</p>
                                <p>BÁSICO</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex mt-20 text-center ml-10 mr-10 md:ml-36 md:mr-36">
                    <div className="md:mr-20 md:w-1/3">
                        <h1 className="font-bold italic mb-10">TECNOLOGIAS QUE MÁS USO</h1>
                        <div className="relative mt-5 text-left">
                            <div className="flex items-center relative pb-5 justify-start">
                                <div className="border-r-2 border-black absolute h-full top-2 z-10 ">
                                    <i className="fas fa-circle -top-1 -ml-2 absolute" />
                                    <div className="absolute seccion -ml-8 font-bold italic text-gray-400 ">BACKEND</div>
                                </div>
                                <div className="ml-6 pt-5">
                                    <div className="flex mb-4 space-x-16">
                                        <div>
                                            <img className="w-24" src="data:image/png;base64,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" alt="" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="data:image/png;base64,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" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="https://img.icons8.com/ios/452/python.png" />
                                        </div>
                                    </div>
                                    <div className="flex mb-4 space-x-16">
                                        <div>
                                            <img className="w-24" src="data:image/png;base64,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" alt="" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/digitalocean-512.png" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/postgresql-512.png" />
                                        </div>
                                    </div>
                                    <div className="flex mb-4 space-x-16">
                                        <div>
                                            <img className="w-24" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/mysql-512.png" alt="" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vert_black-transparent.png" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-linux-os-1.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center relative pb-5 pt-5 justify-start">
                                <div className="border-r-2 border-black absolute h-full top-2 z-10 ">
                                    <i className="fas fa-circle -top-1 -ml-2 absolute" />
                                    <div className="absolute seccion -ml-8 font-bold italic text-gray-400">SOFTWARE</div>
                                </div>
                                <div className="ml-6 pt-5">
                                    <div className="flex mb-4 space-x-16">
                                        <div>
                                            <img className="w-24" src="data:image/png;base64,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" alt="" />
                                        </div>
                                        <div>
                                            <img className="w-24" style={{ filter: 'contrast(0.01%) brightness(10%)' }} src="https://i2.wp.com/mac-torrent-download.net/wp-content/uploads/2019/11/Navicat-Premium-15-icon.png?resize=246%2C246&ssl=1" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="https://img.icons8.com/ios-filled/452/burp-suite.png" />
                                        </div>
                                    </div>
                                    <div className="flex mb-4 space-x-16">
                                        <div>
                                            <img className="w-24" src="https://i.imgur.com/VCRcgf2.png" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="https://i.imgur.com/pXHzSuT.png" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="https://i.imgur.com/Hen7iya.png" />
                                        </div>
                                    </div>
                                    <div className="flex mb-4 space-x-16">
                                        <div>
                                            <img className="w-24" src="https://img.icons8.com/ios/452/xcode.png" />
                                        </div>
                                        <div>
                                            <img className="w-24" style={{ filter: 'contrast(0.01%) brightness(10%)' }} src="https://cdn.clipart.email/f7b6e038eb20af29a2864eebc3dd7a2b_android-studio-logo-png-picture-378911-android-studio-logo-png_512-512.png" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/postman-512.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center relative pb-5 pt-5 justify-start">
                                <div className="border-r-2 border-black absolute h-full top-2 z-10 ">
                                    <i className="fas fa-circle -top-1 -ml-2 absolute" />
                                    <div className="absolute seccion -ml-8 font-bold italic text-gray-400 top-32">FRONTEND</div>
                                </div>
                                <div className="ml-6 pt-5">
                                    <div className="flex mb-4 space-x-16">
                                        <div>
                                            <img className="w-24" src="https://www.flaticon.com/svg/static/icons/svg/1216/1216909.svg" alt="" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/JQuery_logo-512.png" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD///9PT0+kpKT8/PyZmZn39/cyMjK9vb3m5ubd3d23t7c3Nzfp6env7++rq6tiYmKysrKNjY3Dw8NCQkKfn593d3fJycmGhoZqamrR0dEbGxvh4eHW1tbNzc1ZWVl+fn4eHh4lJSVISEgTExM9PT1vb28LCwt6enpVVVUsLCw0NDSXW8hOAAAL0klEQVR4nOWde1/bOBOFMXGcKwm5pzRAgBAK/f7f7yXZdrdYc+ZIY1kqvOe/7f5s9Di2NJqbLoo/NFxefgUth39CXXwgvPgawoS73EOLpB0knBxyjy2KDhNIWPZyDy6KeiUkLJ5yDy6KngpM+Jp7cFH0qhAecw8uio4K4Tb34KJoqxB2cg8uijoK4SL34KJooRBucg8uijYK4W3uwUXRrUJ4lXtwUXSlEBa5BxdFhUb4knt0EfSiEn4Fw7SnEn4Fs+1VJVznHl4ErVXCbu7hRVBXJZzmHl4ETVXCUe7hRdBIJbzLPbwIulMJB7mHF0EDlbDMPbwIKlXCr2C21Ylq//099/ga6zsh/PzetidC+C33ABvrGyH8/L6oLSH8/GZblxB+fm9bhxD2cw+wsfqE8PP7om4J4ef3RV0RwknuATbWhBBWD7lH2FAPFSEsn3MPsaGeS0JY3OceYkPd14Ecws9uttWNNpfwR+4hNtQPSkjNtnkno/gbVjfaXMIZu8VN/YqUWlHCWf0Sh5D6oqb1K1JqTwnv6pc4hNRsm6dhkXVJCetGm0tIc9vW9StS6pESDuuXOIRXLMB2mYZFFgV8qZulLmHJHtP3utGQUpTw0RmdQ1iM2U0yEnKH9di5xiWk3jbnPUinG0pY97RJhNfsJhvnkmTi+T7XzjUuIfW2ZVwQqTnieNokQuqLcuyidJpTwrofSiKkIcSjc0ky8dzJkXONS0jf9ecULLK4SbNwrnEJubctBYss7oBwjDaBkHvbUrCIKt/o2NylTBguvcvOvSaNqEUpPX0LYbYF0aPixb1I+CfqT3Tnq0TiU8SDe5FASM22bAsiN2lco00ipIuO485KJR4YE9ZqgZD6ooQHlUY8fCu8XgIhfVI995o04iaNa7RJhNS8PdSDH6lEtz2up00k5An7w6JsoMq8hV7SkQkLmUDYchXiYT5w/6aHqhkHlIwRgbBqk+96Y/sFB3OvsF89tJac0PjzFTf8CwwhLFsKki6FacBH5Ywb3L/0ILwg0kbB430P19Hd13hpNw8o3V0KN5AIfV8Jfz12jAvMXdhYXD+UTLiPzPdq3YxMQ8s/9p6E3N8ToIetcXYZGIYhRY0kQh6k89blTJjdfHRniravPAmjJeyvjbNLMTVmhEg7V4kwTubX48r4813ZvxLpiUqEMcy2a+vsEjh7fpTkQZIIG5ckvMyNzqpq2mwtliY1iXDSLJ19PDJuHq62Dcsfv0urrkRY0hCiIvPsctc8G2ssPVrRvcud5+hPrIy2S2WdPT9IDMCLhManad0ZFYNtnLYxTk4bJDS1x5hbY8MRXs9fEqNiImH4gvRk3BkVk2DbU5GY6iMShtZZmmeXXdPZ86PE6LRIGNQe42DdGRWb2LmsbvAQEQbUWd5bbZdqGt+V4OS0QULfrmaPVr/L++sZHe9CyPiChH4lCZcjo2ldLFpKtRZnc5Gw9Fie1uID81C1aqvG8SAux3LImqYA7q0/3/vWfd61iRI+in9QJqSGaYasIV7r4ua0nSQT0u8kQ5CUT3+i0QYIacJ+hjRavoQ5afpnyYTUF/UqXtaquBki+aEQIQ0hyq98q+JZe7JtLBPSOst6SXgC8bm0Xlv5j2RCnqnaJoss3jpHrgSRh8p9Ueb10Czug5NNSPBj0Lulz/zirhX5OiuhdUdoF/czyteBf6aGafLctoqGSQ/yhYCQPjBxs9mmeF6iFB4tICGN/CQ3THmoASSjAULqi0pe38XNUjAkQEiXV9kGbFF8iQa7AUBIvW1SxLxVcaMNfDiAkJq5ySvYeGAaTH6AkL71yTMwuesKuFUAId1Q91KbbdwsBW5bK6EYqmtTPHMhjJC3x7B6Sq2i2edOQ4xfAoQlNWoSm968mGQJQntoo0f3KokJecIkWr8QIU/Yn2/nv/Tbobk66Z/eB9OzZieNHPU/avGH4HPjhKikDhHu6R1bkexMKnwCDVJOm0aYqauZ7GopGhhtkJAbSa0Ibsp4DzIUhUaE/Jm1Irix5uUyqCMJIsx0MBJsnMK/GhQLQ4SZDkaCITuePIGmYUSY6WAkaClRow0W8iBC7vhpRdCepzbWG7oUOq9bSdinQqPhzj/gh1IIzbltjQQJ6ZVwSw7vmaWrGQ740Eth2SckzNKMFgbtuNHmNsRghHyJHfdk/bRPw/BV46nnQm0lIeRmUlnJKvZmQujB4wFgaNFCQl5nCf0Y9noNtD/wKJCA9h4k5O8FDD/Zj5CAKR78lnA0kJB/2/Cp2StS4MfEjTaYvwsJ+RkCsLWC/eQvGO/hWcswAbvBGgvTgu1WO7ylNQCsElLDFIaf7GW2cANM09DeDIT0seG8KDOhmAJ7Ek0lxHEUTEhffTmNrBEh2h5W1IjAzaswId1V435R5vR7tMTy7BecSogJ6RKEX33zyV/ohnxxxlF3TEhXNdwi0nzyF7oh94vhrkCYkK9qcJE170vsY8HZL5iQr2rQbWR1Jz+gG3KjDYdRMCE3aqDrz3pIBpy7uNGGa8qUJEN6V7h6WQ1TmJfLm4wrGPh/0aIB+HVbHebQE0FjfUq+q0JIvW1wDbIWEsPtIc2sh542lZD6ouCAjMeAvKBFjUeklfZjCiGd8+FtLe7k5QoX4VTULIV+KJWQTmDYMC0m/R8B5dK99UJNXuHFJEqanUJI53ySNTTo//BxnF93aAUV/66hc0AlpN42njVUTkZ77Q173G58Mo+48QE9bSohNXc9+7ZNRmtx4bmf+tZGc6NNScpWCPmM6F+9vRsdP3yXy+1dQGU7D7krI2lEGJQXVe5m6/MbezjOAhOquJ1rI+TtMYIT9svBtHsb3paAzupalp1CyA9GUr7vqNqzgThHIP0hrbyHbtWVOTqqqFmqldJphPTGqdLZ6bKq5WRrhNQZodhKUUUnBK3gUyOkH3ii/vN8L669TBoh9R0kSmfnhFp9i0ZITYlE7Xa5WapVYWmEfKue5kAWXuOsnbKlEfLctjSE3O2j7U40Qm62pUnY575EzUDWCHnCfppkb7pRRWn6Z6klyzTCMl4NW39RqwWN86kznkros0V/229afFd3HZ8mg4qnjRB6tjA83Iduh7xU3m09m7iphXQq4d7vD5z0No97LuJkFtClB7o1KWFg6s+6H+d9rW7nYR34YA0DJQyPP9wrXk8/XfWP/AjAmtQjRVTCoK5mv9Xb2ivZhytawCVJLSxXCc0lCdez8Pe1XOytf06dAlTCJseQP3WHAUWYA69VAUn1+elNShr81Yuzs97np3xfFRomlesMLRKedEncvpPZdfPWiQ0IoxRdPM5v5Pe1uu026Xb7r0BDDC/CWCUJh+Oo/lNe9dexGieqRhshjJmwf7n6z4E8XMUsdtBPZ9IJo3bYv7h42W7K91UhbtNS5tTUCSN22P+tFipVVKONENoztlNK7ySjE5rMtuTSuwHphJnqLAOlG/s6YasHI0WTbh3+vxOWbbWLjSlyFDppD5inzjJMuknDCOMfjBRfpKETITTnMycU6RZLCLPUWQaKxGkJYQtmW3TpRhsjjHYwUosih/cSwkztMYJEXNGEMFPziCCRABghbHwwUgKRmAkhzNQeI0QsQ5IQVj9zA1D9JG5Z1tTZ5GVPKtbfkBG2dBJFRCnZ5l6EWdpjBImdg05bj990/+b9xbJLA7M+zdUni/3fSLnce4VFfNvHD2brv2nhOKy9UwcCGuSXcT3Vdl0G5biEHgGwCQyxx9bzPDTCHEpYnGph1lFCRsEar/uGrBYDYXHKue+kXka+dQa29Csb4Vk33VQv7DNfE1ohLM7rSNuUz35rQluEJ+1mx5aOm794OM6aZz82JyzO64i5jQLUa6S8xyiEZ23m8WbYcfCagBWPsIi0jtjWBKyohMWpQq3ROvKts4udkhub8KTSto68rwltJBy3QXhStdiHvLDjvV7r3EBtEZ70vo74JFI+xlgTsNokfFc1XOl+kPtVSIKfRS0TnrWZy0n/vYhrAlYKwuKc4/XRL/lz3beech2oRITFh3WkhTUBKx3hSeXt6nplKHVuov8Bzzq2x0/uuLQAAAAASUVORK5CYII=" />
                                        </div>
                                    </div>
                                    <div className="flex mb-4 space-x-16">
                                        <div>
                                            <img className="w-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFpfYz4DA8fBtTByR0UPNsMX5I2FbWUrYOjw&usqp=CAU" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="data:image/png;base64,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" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5CrEfm5Q_4rOst-cvdiTGBeX8XQjuc2Juw&usqp=CAU" />
                                        </div>
                                    </div>
                                    <div className="flex mb-4 space-x-16">
                                        <div>
                                            <img className="w-24" src="data:image/png;base64,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" />
                                        </div>
                                        <div>
                                            <img className="w-24" style={{ filter: 'contrast(90%) brightness(50%)' }} src="https://www.markusantonwolf.com/media/pages/blog/alpine-js/1468511062-1596675049/alpinejs-logo.svg" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWS2CD7XCCxERnQJHaAfvsE8HlYoIiORxKlw&usqp=CAU" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center relative pb-5 pt-5 justify-start">
                                <div className="border-r-2 border-black absolute h-full top-2 z-10">
                                    <i className="fas fa-circle -top-1 -ml-2 absolute" />
                                    <div style={{ top: '80%' }} className="absolute seccion -ml-8 font-bold italic text-gray-400">DESAROLLO&nbsp;MÓVIL</div>
                                    <i className="fas fa-circle -bottom-3 -ml-2 absolute" />
                                </div>
                                <div className="ml-6 pt-5">
                                    <div className="flex mb-4 space-x-16">
                                        <div>
                                            <img className="w-24" src="data:image/png;base64,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" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="https://i.imgur.com/7AaIwV8.png" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="data:image/png;base64,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" />
                                        </div>
                                    </div>
                                    <div className="flex mb-4 space-x-16">
                                        <div>
                                            <img className="w-24" src="https://img.icons8.com/ios/452/apple-app-store--v2.png" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/firebase-512.png" />
                                        </div>
                                        <div>
                                            <img className="w-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvFuV7rL4NVvgHYU0IKbiNQx0dneHaguXh2w&usqp=CAU" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <h1 className="font-bold italic mb-10">PROYECTOS</h1>
                        <div className="relative mt-5 text-left">
                            <div className="flex items-center relative">
                                <div className="hidden md:block w-20">
                                    <div className="font-bold italic">2020</div>
                                    <div className="md:flex space-x-1 text-xs">
                                        <div>Abr.</div>
                                        <div>-</div>
                                        <div>Jun.</div>
                                    </div>
                                </div>
                                <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                                    <i className="fas fa-circle -top-1 -ml-2 absolute" />
                                </div>
                                <div className="ml-10">
                                    <div className="font-bold">Proyecto 1</div>
                                    <div className="italic md:mb-4">Empresa 1</div>
                                    <div className="mb-4 mt-2 md:hidden">
                                        <div className="font-bold">2020</div>
                                        <div className="text-xs">Abril - Junio</div>
                                    </div>
                                    <div className="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh.</div>
                                </div>
                            </div>
                            <div className="flex items-center relative">
                                <div className="hidden md:block w-20">
                                    <div className="font-bold italic">2020</div>
                                    <div className="md:flex space-x-1 text-xs">
                                        <div>Jul.</div>
                                        <div>-</div>
                                        <div>Ago.</div>
                                    </div>
                                </div>
                                <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                                    <i className="fas fa-circle -top-1 -ml-2 absolute" />
                                </div>
                                <div className="ml-10">
                                    <div className="font-bold">Proyecto 2</div>
                                    <div className="italic md:mb-4">Empresa 2</div>
                                    <div className="mb-4 mt-2 md:hidden">
                                        <div className="font-bold">2020</div>
                                        <div className="text-xs">Julio - Agosto</div>
                                    </div>
                                    <div className="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh.</div>
                                </div>
                            </div>
                            <div className="flex items-center relative">
                                <div className="hidden md:block w-20">
                                    <div className="font-bold italic">2020</div>
                                    <div className="md:flex space-x-1 text-xs">
                                        <div>Ago.</div>
                                        <div>-</div>
                                        <div>Hoy.</div>
                                    </div>
                                </div>
                                <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                                    <i className="fas fa-circle -top-1 -ml-2 absolute" />
                                    <i className="fas fa-circle bottom-0 -ml-2 absolute" />
                                </div>
                                <div className="ml-10">
                                    <div className="font-bold">Proyecto 3</div>
                                    <div className="italic md:mb-4">Empresa 3</div>
                                    <div className="mb-4 mt-2 md:hidden">
                                        <div className="font-bold">2020</div>
                                        <div className="text-xs">Agosto - Hoy</div>
                                    </div>
                                    <div className="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tailwind;