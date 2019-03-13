import React from 'react'
import Svg, {
  Use,
  Image,
  Path,
  G
} from 'react-native-svg';

const Logo = props => (
  <G xmlns="http://www.w3.org/2000/svg">
    <G fill="#010101">
      <Path d="M74.8 21.7L72 16.6c-.9-1.7-1.3-2.8-1.3-2.8h-.1s.2 1 .2 2.9v8.9h-3V9H71l3.7 7c.7 1.4 1 2.1 1 2.1h.1s.2-.8 1-2.1l3.6-7h3.2v16.6h-3v-8.9c0-1.9.1-2.9.1-2.9h-.1s-.3 1.1-1.2 2.8l-2.8 5.1h-1.8zM96.7 21.5h-6.6l-1.5 4.2h-3.1l6-16.6h3.8l6 16.6h-3.2l-1.4-4.2zM91 19h4.9l-1.1-3.1c-.9-2.6-1.3-4.5-1.3-4.5h-.1s-.4 1.8-1.3 4.5L91 19zM116.4 22.4c-1.5 2.4-3.4 3.6-6.8 3.6-4.3 0-7.4-3.1-7.4-8.6s3.1-8.7 7.8-8.7c3.1 0 5.2 1.4 6.4 4.1l-2.8 1.4c-.6-1.9-1.9-2.9-3.7-2.9-2.9 0-4.6 2.3-4.6 6.1 0 3.7 1.5 5.9 4.5 5.9 1.9 0 3.1-.8 4.1-2.5l2.5 1.6zM130.2 30c-3.8.1-5.9-1.8-6.7-4.2-3.6-.7-5.8-3.7-5.8-8.5 0-5.6 2.9-8.7 7.6-8.7s7.6 3.1 7.6 8.7c0 5-2.4 8.1-6.3 8.6 1.1 1.1 2.8 1.6 4.5 1.4l-.9 2.7zm-9.4-12.6c0 3.7 1.5 6 4.4 6 2.9 0 4.5-2.3 4.5-6 0-3.8-1.5-6-4.5-6-2.9-.1-4.4 2.2-4.4 6zM148.3 9v11.2c0 4.4-3.1 5.8-6.5 5.8s-6.5-1.4-6.5-5.8V9h3v10.3c0 2.8 1.1 4.2 3.5 4.2s3.5-1.4 3.5-4.1V9h3zM160.7 21.5h-6.6l-1.5 4.2h-3.1l6-16.6h3.8l6 16.6h-3.2l-1.4-4.2zm-5.8-2.5h4.9l-1.1-3.1c-.9-2.6-1.3-4.5-1.3-4.5h-.1s-.4 1.8-1.3 4.5l-1.1 3.1zM176.6 25.7c-.4-.4-.6-.9-.8-1.6l-.6-2.7c-.4-1.8-1.3-2.1-2.8-2.1h-2v6.5h-3V9h6c3.8 0 5.8 1.5 5.8 4.9 0 2.6-1.7 4-3.8 4.2v.1c1.5.2 2.4.9 2.8 2.6l.8 3.2c.2.7.4 1.2.9 1.8h-3.3zm-6.3-9h2.8c1.9 0 2.8-.8 2.8-2.6 0-1.6-.9-2.6-2.8-2.6h-2.8v5.2zM185.5 9v16.6h-3V9h3zM200 25.7h-10.5V9H200v2.6h-7.5V16h6.6v2.6h-6.6V23h7.5v2.7z" />
    </G>
    <G fill="#010101">
      <Path d="M75.2 31.4h1.5v8.3c0 2-.3 3.3-.9 3.9-.7.7-1.5 1-2.5 1-1.1 0-1.9-.4-2.5-1.1-.3-.4-.6-.9-.7-1.5-.1-.6-.2-1.5-.2-2.8v-7.9h1.3v-1h-4.9v1h1.5v8.3c0 2 .4 3.5 1.3 4.5.9.9 2.2 1.4 4 1.4 1.8 0 3.1-.5 4-1.6.5-.6.8-1.2.9-1.8.1-.6.2-1.6.2-3v-7.8h1.5v-1h-4.4v1.1zM91 37.6c0-1.1-.3-1.9-.8-2.5-.5-.6-1.3-.9-2.2-.9-.8 0-1.5.2-2.2.6-.6.4-1.2 1-1.7 1.7v-2h-3.4v1h1.5v8.9h-1.5v1h4.9v-1h-1.5v-6.9c.5-.6 1.1-1 1.6-1.3.5-.3 1.1-.4 1.6-.4.6 0 1.1.2 1.3.5.2.3.4.9.4 1.8v6.4h-1.5v1h4.9v-1H91v-6.9zM97.1 34.4h-3.5v1h1.5v8.9h-1.5v1h4.9v-1h-1.4zM95.1 30.5h2v2h-2zM106.6 35.4h1.4l-3.2 7.4-3.1-7.4h1.5v-1h-4.5v1h.9l4.1 10h1l4.4-10h.9v-1h-3.4zM114.7 34.1c-1.4 0-2.5.5-3.4 1.6-.9 1-1.3 2.4-1.3 4 0 1.7.5 3.1 1.5 4.2s2.3 1.6 3.8 1.6c1 0 2.2-.2 3.4-.7v-1.5c-1 .6-2.1.9-3.1.9-1.1 0-2-.4-2.6-1.2-.6-.8-.9-1.9-.9-3.4h6.7v-.4c0-1.6-.3-2.9-1-3.8-.8-.8-1.8-1.3-3.1-1.3zm2 4.5h-4.5c.1-1.2.3-2 .7-2.6.4-.6 1-.9 1.7-.9 1.4 0 2 1.1 2 3.2v.3zM124.1 36.4v-2h-3.4v1h1.5v8.9h-1.5v1h4.9v-1h-1.5v-6.9c.9-1 1.8-1.5 2.6-1.5h.3V37h1.2v-2.7c-.2-.1-.4-.1-.6-.1-1.4-.1-2.6.7-3.5 2.2zM134.7 39.2l-.9-.4c-.9-.4-1.5-.7-1.8-1-.3-.3-.5-.6-.5-1.1 0-.5.2-.9.5-1.2.4-.3.8-.5 1.3-.5.3 0 .7.1 1 .2.3.1.7.3 1.1.6V37h1.2v-2.4c-.6-.2-1.1-.4-1.7-.5-.5-.1-1.1-.2-1.6-.2-1.1 0-2 .3-2.7.9-.7.6-1 1.3-1 2.2 0 1.4 1 2.5 3.1 3.3l1 .4c1.1.4 1.7 1.1 1.7 1.9 0 .5-.2.9-.6 1.3-.4.3-.9.5-1.5.5-.4 0-.8-.1-1.2-.2-.4-.2-.8-.4-1.3-.7v-1.2h-1.2v2.4c.6.3 1.2.5 1.8.6.6.1 1.2.2 1.9.2 1.2 0 2.2-.3 3-.9.8-.6 1.1-1.4 1.1-2.4 0-.7-.2-1.3-.6-1.7-.4-.4-1.1-.9-2.1-1.3zM140.4 30.5h2v2h-2zM142.3 34.4h-3.4v1h1.5v8.9h-1.5v1h4.9v-1h-1.5zM152.1 42.9H151s0 1.1-1 1.5c-.2.1-.3.1-.5.1-.4 0-.7-.2-1-.6-.2-.4-.3-.9-.3-1.7v-6.8h2.8v-1h-2.8v-2.5l-2 .5v2h-1.5v1h1.5v6.5c0 1.3.3 2.2.8 2.8.5.6 1.3.9 2.3.9h.7c.1 0 .1 0 .2-.1h.1c.1 0 .1 0 .2-.1h.1c.7-.5 1.4-1.2 1.5-2.5zM160.2 34.4v1h1.5l-3.3 7.4-3.1-7.4h1.5v-1h-4.5v1h.9l4.1 10c-.2.4-.3.7-.5 1.1-.4.6-.8 1.2-1.4 1.5-.3.2-.8.3-1.1.3-.4 0-.9-.2-1.2-.4V47h-1v1.9c.2.1.5.2.9.3.5.1 1.1.1 1.6.1.8-.1 1.5-.4 2.1-1 .4-.4.9-1.2 1.2-1.8.1-.1.1-.3.2-.4l.3-.6 4.4-10h.9v-1h-3.5z" />
    </G>
    <Path
      fill="#D52027"
      d="M30.6 32.9l4.8 2.8h.4l-.1.2 16.2 9.4V15.1L30.6 27.5z"
    >
      <Path
        fill="#772430"
        d="M16.5 35.7l4.8-2.8v-5.4L0 15.1v30.2l16.2-9.4v-.2z"
      >
        <Path fill="#D52027" d="M26 0l25.9 15.1V0z">
          <Path fill="#772430" d="M0 0v15.1L26 0z">
            <G fill="#772430">
              <Path d="M36.6 39.9v1.9h-.9c-.8.5-1.4 1.3-1.6 2.6h-.9l.1 2.1.5 9.4 18.1-10.5L35.7 36l-.9 4h1.8zM35.4 35.7l-4.8-2.8v2.8z" />
            </G>
            <G fill="#D52027">
              <Path d="M17.1 39.9l-.9-4.1L0 45.3l18.1 10.5.6-11.4h-.9c-.2-1.3-.8-2.1-1.6-2.6h-.9v-1.9h1.8zM21.3 32.9l-4.8 2.8h4.8z" />
            </G>
            <Path
              fill="#FFF"
              d="M26.6 18.6h.3c.2-.2.4-.6.4-1 0-.7-.6-1.3-1.3-1.3h-.3c-.3.2-.4.6-.4 1-.1.7.5 1.3 1.3 1.3zM28.1 44.8c-3.8 0-4.8 2.3-4.8 2.3l-.3.5-.4 10.9 3.3 1.9 7.9-4.6-.5-9.4c0-.1-1-1.7-5.2-1.6z"
            >
              <Path
                fill="#B3B3B3"
                d="M15.3 39.9v1.9h.9c.8.5 1.4 1.3 1.6 2.6h.9l-.6 11.4 4.6 2.7.3-10.9.2-.5s1.1-2.3 4.8-2.3c4.3-.1 5.2 1.5 5.3 1.7l-.1-2.1h.9c.2-1.3.8-2.1 1.6-2.6h.9v-1.9H15.3z"
              >
                <Path
                  fill="#B3B3B3"
                  d="M26.9 52.5c0-.3-.4-.9-.9-.9s-.9.6-.9.9v2.3h1.8v-2.3z"
                >
                  <G fill="#772430">
                    <Path d="M22.5 25.8v1.4l3.5 2 3.4-2v-1.4zM26 31.2l-3.5 2v1.4h6.9v-1.4z" />
                  </G>
                  <Path
                    fill="#772430"
                    d="M30.6 24.7h.4c.3 0 .6.3.6.6s-.2.6-.6.6h-.4v1.6l21.3-12.4L26 0v16.2c.7 0 1.3.6 1.3 1.3 0 .4-.1.7-.4.9-.2.2-.3.5-.3.8 0 .4.2.7.4.9 2.1.5 3.6 2.4 3.6 4.6z"
                  >
                    <Path
                      fill="#B3B3B3"
                      d="M26 34.6h-3.4v-1.3l3.4-2v-2.1l-3.4-2v-1.3H24c-.1 0-.2-.3-.2-.6s.1-.6.2-.6h.1c0-2.6.8-4.7 1.8-4.7.4 0 .7 0 1.1.1-.3-.2-.4-.5-.4-.9 0-.3.1-.6.3-.7h-.3c-.7 0-1.3-.6-1.3-1.3 0-.4.2-.7.4-1-.6.2-1 .7-1 1.3 0 .4.1.7.4.9.2.2.3.5.3.8 0 .4-.2.7-.4.9-2.1.5-3.6 2.3-3.6 4.6H21c-.3 0-.6.3-.6.6s.2.6.6.6h.4v9.8H26v-1.1z"
                    >
                      <Path
                        fill="#FFF"
                        d="M26 29.2v2.1l3.4 2v1.3H26v1.1h-9.8l.9 4.2h17.7l.9-4.2h-5.1v-9.8h.4c.3 0 .6-.3.6-.6s-.2-.6-.6-.6h-.4c0-2.6-2.1-4.7-4.7-4.7-1 0-1.8 2.1-1.8 4.7H24c-.1 0-.2.3-.2.6s.1.5.2.6h5.4v1.3l-3.4 2z"
                      >
                        <Path fill="#772430" d="M22.5 28.9l2.2 1.3-2.2 1.3z">
                          <Path fill="#D52027" d="M29.4 28.9l-2.2 1.3 2.2 1.3z">
                            <Path
                              fill="#FFF"
                              d="M35.6 16.4l-2 1.8.2-2.7-2.6-.4 2.2-1.5-1.4-2.4 2.6.8 1-2.5 1 2.5 2.6-.8-1.3 2.4 2.2 1.5-2.7.4.2 2.7z"
                            >
                              <Path
                                fill="#D52027"
                                d="M20.9 25.8c-.3 0-.6-.3-.6-.6s.2-.6.6-.6h.4c0-2.2 1.5-4.1 3.6-4.6.3-.2.4-.5.4-.9 0-.3-.1-.6-.3-.8-.2-.2-.4-.6-.4-.9 0-.6.4-1.1 1-1.3h.3V0L0 15.1l21.3 12.4v-1.6h-.4z"
                              >
                                <Path
                                  fill="#B3B3B3"
                                  d="M21.8 39.1h1.3l-.1-2.6h-1.5l.3 2.6zM24.1 39.1h1.8v-2.5h-2l.2 2.5z"
                                >
                                  <Path
                                    fill="#D52027"
                                    d="M19.7 39.1h1.2l-.3-2.5h-1.4l.5 2.5zM17.8 39.1h.9l-.5-2.5h-1l.6 2.5z"
                                  >
                                    <Path
                                      fill="#772430"
                                      d="M31 39.1h1.3l.5-2.5h-1.4l-.4 2.5zM33.2 39.1h1l.6-2.5h-1.1l-.5 2.5z"
                                    />
                                  </Path>
                                </Path>
                              </Path>
                            </Path>
                          </Path>
                        </Path>
                      </Path>
                    </Path>
                  </Path>
                </Path>
              </Path>
            </Path>
          </Path>
        </Path>
      </Path>
    </Path>
  </G>
)

export default Logo
