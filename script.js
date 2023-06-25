TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "videoVisibleOnStop": false,
      "blending": 0.08,
      "chromaColor": "#28C034",
      "video": {
       "height": 480,
       "mp4Url": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313.mp4",
       "width": 854,
       "class": "VideoResource"
      },
      "chromaSmoothing": 0.1,
      "id": "overlay_C5ACBA36_CA04_401B_41D0_CC3DFF353F5C",
      "loop": true,
      "rotationX": 6.05,
      "roll": -2.59,
      "rotationY": -11.11,
      "pitch": -8.36,
      "chromaThreshold": 0.24,
      "class": "VideoPanoramaOverlay",
      "yaw": 82.05,
      "vfov": 26.38,
      "image": {
       "levels": [
        {
         "height": 2,
         "width": 2,
         "url": "media/overlay_C5ACBA36_CA04_401B_41D0_CC3DFF353F5C_t.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "autoplay": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Video"
      },
      "hfov": 31.49,
      "useHandCursor": true
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_tcap0",
      "hfov": 45.6,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_4488E140_4A70_EF6A_4183_1301795CB82C",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 194,
           "width": 200,
           "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_0_HS_5_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 74.99,
        "hfov": 55.01,
        "pitch": 30.97
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_5A65D056_4A70_ED16_41A0_FC863A38AC38",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 190,
           "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_0_HS_6_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -70.01,
        "hfov": 42.75,
        "pitch": 36.63
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 134,
  "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD",
  "thumbnailUrl": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_t.jpg",
  "audios": [
   {
    "data": {
     "label": "ES_Castle Haunted"
    },
    "class": "PanoramaAudio",
    "id": "audio_DF46CC02_CA2F_9E6D_41E4_11C404230921",
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_DF46CC02_CA2F_9E6D_41E4_11C404230921.mp3",
     "oggUrl": "media/audio_DF46CC02_CA2F_9E6D_41E4_11C404230921.ogg"
    }
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "5.00_00_27_10.Imagen fija002",
  "class": "Panorama",
  "cardboardMenu": {
   "class": "Menu",
   "fontFamily": "Arial",
   "rollOverFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "rollOverBackgroundColor": "#000000",
   "id": "Menu_E389783D_F28A_7D53_41E1_EFEE7E8664BD",
   "rollOverOpacity": 0.8,
   "opacity": 0.4,
   "children": [
    {
     "label": "5.00_00_27_10.Imagen fija002",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "label": "YIVR_Stitch_C0895001_0895_360_190926080439_360_equi_equi",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "label": "5.00_00_00_00.Imagen fija001",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "label": "2.00_00_13_18.Imagen fija003",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "label": "6.MP4_snapshot_00.16_[2022.11.05_19.03.45]4EMB-very_compressed-scale-1_00x",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    }
   ],
   "selectedFontColor": "#FFFFFF"
  },
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonCardboardView": "this.IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5",
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.63,
   "hfov": 129,
   "pitch": 9.95
  }
 },
 {
  "adjacentPanoramas": [
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A",
       "class": "AdjacentPanorama",
       "yaw": -101.07,
       "backwardYaw": -97.46,
       "distance": 1
      }
     ],
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 2880,
          "width": 5760,
          "url": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "class": "TripodCapPanoramaOverlay",
         "id": "panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_tcap0",
         "hfov": 45.6,
         "rotate": false,
         "image": {
          "levels": [
           {
            "height": 850,
            "width": 850,
            "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_tcap0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "angle": 0,
         "inertia": false
        },
        {
         "videoVisibleOnStop": true,
         "blending": 0.94,
         "chromaColor": "#28C034",
         "video": {
          "height": 720,
          "mp4Url": "media/video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6.mp4",
          "width": 1280,
          "class": "VideoResource"
         },
         "chromaSmoothing": 0.11,
         "id": "overlay_FCEBAF96_EDCD_8156_41DC_C51DAD990272",
         "loop": true,
         "rotationX": -8.44,
         "roll": -0.28,
         "rotationY": -56.9,
         "pitch": 1.52,
         "chromaThreshold": 0.22,
         "class": "VideoPanoramaOverlay",
         "yaw": 142.66,
         "vfov": 3.03,
         "image": {
          "levels": [
           {
            "height": 2,
            "width": 2,
            "url": "media/overlay_FCEBAF96_EDCD_8156_41DC_C51DAD990272_t.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "autoplay": true,
         "enabledInCardboard": true,
         "data": {
          "label": "Video"
         },
         "hfov": 9.87,
         "useHandCursor": true,
         "click": "this.overlay_FCEBAF96_EDCD_8156_41DC_C51DAD990272.stop()"
        },
        {
         "data": {
          "label": "Polygon"
         },
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_F86FD138_EDCD_8159_41E2_9EB3FCB3B587",
         "useHandCursor": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 184,
              "width": 200,
              "url": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_0_HS_1_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -14.59,
           "hfov": 43.78,
           "pitch": -34.01
          }
         ]
        },
        {
         "videoVisibleOnStop": true,
         "blending": 0.26,
         "chromaColor": "#28C034",
         "video": {
          "height": 1280,
          "mp4Url": "media/video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB.mp4",
          "width": 720,
          "class": "VideoResource"
         },
         "chromaSmoothing": 0.03,
         "id": "overlay_5CFDAA7C_499D_C682_41CC_71AC29719C8F",
         "loop": true,
         "rotationX": 3.96,
         "roll": -1.16,
         "rotationY": -6.13,
         "pitch": -9.06,
         "chromaThreshold": 0.28,
         "class": "VideoPanoramaOverlay",
         "yaw": 50.6,
         "vfov": 52.48,
         "image": {
          "levels": [
           {
            "height": 1280,
            "width": 720,
            "url": "media/overlay_5CFDAA7C_499D_C682_41CC_71AC29719C8F_t.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "autoplay": false,
         "enabledInCardboard": true,
         "data": {
          "label": "Video"
         },
         "hfov": 23.51,
         "useHandCursor": true,
         "click": "this.overlay_5CFDAA7C_499D_C682_41CC_71AC29719C8F.play()"
        },
        {
         "data": {
          "label": "Polygon"
         },
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A, this.camera_E39C1852_F28A_7DD1_41D1_3DBC996EEBBD); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_5871DA47_4A90_7D76_41C0_057CFAEE46B7",
         "useHandCursor": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 200,
              "width": 94,
              "url": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_0_HS_5_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -101.07,
           "hfov": 76.88,
           "pitch": 0.94
          }
         ]
        }
       ]
      }
     ],
     "hfovMax": 140,
     "id": "panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E",
     "thumbnailUrl": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_t.jpg",
     "audios": [
      {
       "data": {
        "label": "ES_Ghosting"
       },
       "class": "PanoramaAudio",
       "id": "audio_F948C705_EDCD_812B_4196_200730E06FB8",
       "autoplay": true,
       "audio": {
        "class": "AudioResource",
        "mp3Url": "media/audio_F948C705_EDCD_812B_4196_200730E06FB8.mp3",
        "oggUrl": "media/audio_F948C705_EDCD_812B_4196_200730E06FB8.ogg"
       }
      }
     ],
     "pitch": 0,
     "vfov": 180,
     "partial": false,
     "label": "2.00_00_13_18.Imagen fija003",
     "class": "Panorama",
     "cardboardMenu": "this.Menu_E389783D_F28A_7D53_41E1_EFEE7E8664BD",
     "hfov": 360,
     "hfovMin": 60
    },
    "class": "AdjacentPanorama",
    "yaw": -97.46,
    "backwardYaw": -101.07,
    "distance": 1
   }
  ],
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "videoVisibleOnStop": false,
      "blending": 0,
      "chromaColor": "#28C034",
      "video": {
       "height": 360,
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4",
       "width": 640,
       "class": "VideoResource"
      },
      "chromaSmoothing": 0.46,
      "id": "overlay_C769E505_C9EA_BC1B_41C5_DFDFB9E1427F",
      "loop": false,
      "rotationX": 1.53,
      "roll": -4.03,
      "rotationY": -28.65,
      "pitch": -1.27,
      "chromaThreshold": 0.09,
      "class": "VideoPanoramaOverlay",
      "yaw": 57.98,
      "vfov": 9.91,
      "image": {
       "levels": [
        {
         "height": 360,
         "width": 640,
         "url": "media/overlay_C769E505_C9EA_BC1B_41C5_DFDFB9E1427F_t.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "autoplay": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Video"
      },
      "hfov": 13.43,
      "useHandCursor": true
     },
     {
      "videoVisibleOnStop": false,
      "blending": 0,
      "chromaColor": "#28C034",
      "video": {
       "height": 360,
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4",
       "width": 640,
       "class": "VideoResource"
      },
      "chromaSmoothing": 0,
      "id": "overlay_DB9B7068_CA67_E6BE_41C8_1A09D8B026FC",
      "loop": false,
      "rotationX": 8.05,
      "roll": 2.67,
      "rotationY": -4.93,
      "pitch": -7.57,
      "chromaThreshold": 0.22,
      "class": "VideoPanoramaOverlay",
      "yaw": -164.61,
      "vfov": 33.31,
      "image": {
       "levels": [
        {
         "height": 360,
         "width": 640,
         "url": "media/overlay_DB9B7068_CA67_E6BE_41C8_1A09D8B026FC_t.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "autoplay": false,
      "enabledInCardboard": true,
      "data": {
       "label": "Video"
      },
      "hfov": 18.88,
      "useHandCursor": true,
      "click": "this.overlay_DB9B7068_CA67_E6BE_41C8_1A09D8B026FC.play()"
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E, this.camera_E3AE9860_F28A_7DF1_41E3_63DD7285EA5A); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_5BD221A9_4A70_2F3B_417E_28D1D33151AF",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 104,
           "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_0_HS_6_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -97.46,
        "hfov": 30.73,
        "pitch": 6.61
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_596710E9_4A90_2D3A_41C8_31F8E5DCEB1F",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 152,
           "width": 200,
           "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_0_HS_7_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 81.33,
        "hfov": 50.7,
        "pitch": -46.71
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_FF693958_F239_495F_41E5_9CBEA4C6AE3C",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 158,
           "width": 191,
           "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_0_HS_8_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 70.35,
        "hfov": 23.64,
        "pitch": -23.94
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 133,
  "id": "panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A",
  "thumbnailUrl": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_t.jpg",
  "audios": [
   {
    "data": {
     "label": "ES_Dark Element 4"
    },
    "class": "PanoramaAudio",
    "id": "audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F",
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F.mp3",
     "oggUrl": "media/audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F.ogg"
    }
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_C0895001_0895_360_190926080439_360_equi_equi",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_E389783D_F28A_7D53_41E1_EFEE7E8664BD",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 31.13,
   "hfov": 129,
   "pitch": -15.45
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "videoVisibleOnStop": false,
      "blending": 0.07,
      "chromaColor": "#28C034",
      "video": {
       "height": 360,
       "mp4Url": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB.mp4",
       "width": 640,
       "class": "VideoResource"
      },
      "chromaSmoothing": 0.78,
      "id": "overlay_C1DF9AA0_CA27_BBAE_41E8_5775E3BF675F",
      "loop": true,
      "rotationX": 31.76,
      "roll": -14.8,
      "rotationY": -24.56,
      "pitch": -26.98,
      "chromaThreshold": 0.31,
      "class": "VideoPanoramaOverlay",
      "yaw": 10.52,
      "vfov": 48.94,
      "image": {
       "levels": [
        {
         "height": 2,
         "width": 2,
         "url": "media/overlay_C1DF9AA0_CA27_BBAE_41E8_5775E3BF675F_t.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "autoplay": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Video"
      },
      "hfov": 23.08,
      "useHandCursor": true
     },
     {
      "videoVisibleOnStop": false,
      "blending": 0,
      "chromaColor": "#28C034",
      "video": {
       "height": 720,
       "mp4Url": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E.mp4",
       "width": 1280,
       "class": "VideoResource"
      },
      "chromaSmoothing": 0.06,
      "id": "overlay_D82771DC_CA2A_A996_41D2_045CE5C504DE",
      "loop": true,
      "rotationX": 5.23,
      "roll": 0.64,
      "rotationY": -5.12,
      "pitch": 5.18,
      "chromaThreshold": 0.14,
      "class": "VideoPanoramaOverlay",
      "yaw": -40.31,
      "vfov": 14.55,
      "image": {
       "levels": [
        {
         "height": 720,
         "width": 1280,
         "url": "media/overlay_D82771DC_CA2A_A996_41D2_045CE5C504DE_t.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "autoplay": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Video"
      },
      "hfov": 12.07,
      "useHandCursor": true
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_tcap0",
      "hfov": 45.6,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     },
     {
      "videoVisibleOnStop": false,
      "blending": 0,
      "chromaColor": "#28C034",
      "video": {
       "height": 360,
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4",
       "width": 640,
       "class": "VideoResource"
      },
      "chromaSmoothing": 0,
      "id": "overlay_107D7FD3_1E32_BE64_4171_11A206EF3984",
      "loop": false,
      "rotationX": 12.43,
      "roll": -4.59,
      "rotationY": -10.67,
      "pitch": -14.63,
      "chromaThreshold": 0.24,
      "class": "VideoPanoramaOverlay",
      "yaw": 127.72,
      "vfov": 38.22,
      "image": {
       "levels": [
        {
         "height": 360,
         "width": 640,
         "url": "media/overlay_107D7FD3_1E32_BE64_4171_11A206EF3984_t.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "autoplay": false,
      "enabledInCardboard": true,
      "data": {
       "label": "Video"
      },
      "hfov": 24.23,
      "useHandCursor": true,
      "click": "this.overlay_107D7FD3_1E32_BE64_4171_11A206EF3984.play()"
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_5B04C75A_4A70_D319_41BE_BEBD6317C3FB",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 38,
           "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -22.14,
        "hfov": 8.57,
        "pitch": -6.26
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_FE2F1DEC_F24B_B7AB_41D6_59AF31B58A0B",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 39,
           "width": 42,
           "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 82.49,
        "hfov": 5.28,
        "pitch": 8.2
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 82.49,
        "image": {
         "levels": [
          {
           "height": 79,
           "width": 84,
           "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.28,
        "roll": 0,
        "pitch": 8.2
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_FC3237A8_F285_B371_41E7_D0C7FDC60341, {'pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'iconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderColor':'#000000','pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','borderSize':0,'iconLineWidth':5,'paddingRight':5,'rollOverIconWidth':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'rollOverBorderSize':0,'pressedIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverIconHeight':20,'iconColor':'#000000','paddingTop':5,'rollOverBackgroundOpacity':0.3}) } else { this.showPopupMedia(this.window_FD107B77_F285_B3DF_41C8_A2C7E8C1F3E3, this.video_FDC73F9C_F27A_F351_41E0_02EDB89484AC, this.PlayList_E2EAE030_F286_8D51_41E0_4A4F70AEA91C, '95%', '95%', true, true); this.PlayList_E2EAE030_F286_8D51_41E0_4A4F70AEA91C.set('selectedIndex', 0); ; this.viewer_uidE2DDD021_F286_8D73_41E1_EAA8BD7FAE44VideoPlayer.play();  }",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_FF27A2DC_F285_92D1_41E2_6D70DF6C31D6",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 46,
           "width": 46,
           "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_0_HS_3_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 82.19,
        "hfov": 5.87,
        "pitch": 8.49
       }
      ]
     },
     {
      "rotationX": 0,
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "yaw": 82.19,
      "autoplay": true,
      "rotationZ": 0,
      "showEasing": "cubic_in",
      "video": {
       "height": 360,
       "mp4Url": "media/video_FDC73F9C_F27A_F351_41E0_02EDB89484AC.mp4",
       "width": 638,
       "class": "VideoResource"
      },
      "pitch": 8.49,
      "popupMaxWidth": "95%",
      "id": "popup_FC3237A8_F285_B371_41E7_D0C7FDC60341",
      "hfov": 5.43,
      "loop": false,
      "popupMaxHeight": "95%",
      "showDuration": 500,
      "rotationY": 0,
      "hideEasing": "cubic_out"
     }
    ]
   }
  ],
  "hfovMax": 130,
  "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43",
  "audios": [
   {
    "data": {
     "label": "ES_Heartbeat Slow"
    },
    "class": "PanoramaAudio",
    "id": "audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9",
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9.mp3",
     "oggUrl": "media/audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9.ogg"
    }
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_t.jpg",
  "partial": false,
  "label": "5.00_00_00_00.Imagen fija001",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_E389783D_F28A_7D53_41E1_EFEE7E8664BD",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "yawSpeed": 10.61
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -323,
     "yawSpeed": 10.61
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "yawSpeed": 10.61
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 133.98,
   "pitch": -8.85
  }
 },
 "this.panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "yawSpeed": 7.96
    }
   ],
   "id": "sequence_FF66E78E_EDDC_8136_41EA_4F751DDC3DAE"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.38,
   "hfov": 135,
   "pitch": -3.98
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "videoVisibleOnStop": false,
      "blending": 0,
      "chromaColor": "#28C034",
      "video": {
       "height": 360,
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4",
       "width": 640,
       "class": "VideoResource"
      },
      "chromaSmoothing": 0.06,
      "id": "overlay_51EB61E8_499E_C582_41B6_3662F2DDE86A",
      "loop": false,
      "rotationX": 27.78,
      "roll": 6.14,
      "rotationY": 4.18,
      "pitch": -30.73,
      "chromaThreshold": 0.19,
      "class": "VideoPanoramaOverlay",
      "yaw": -78.35,
      "vfov": 74.36,
      "image": {
       "levels": [
        {
         "height": 360,
         "width": 640,
         "url": "media/overlay_51EB61E8_499E_C582_41B6_3662F2DDE86A_t.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "autoplay": false,
      "enabledInCardboard": true,
      "data": {
       "label": "Video"
      },
      "hfov": 38.75,
      "useHandCursor": true,
      "click": "this.overlay_51EB61E8_499E_C582_41B6_3662F2DDE86A.play()"
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_tcap0",
      "hfov": 45.6,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_5B4CE40A_4A70_74FE_41C1_95BC8C081B22",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 200,
           "url": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 81.16,
        "hfov": 35.3,
        "pitch": -25.31
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 142,
  "id": "panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF",
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_t.jpg",
  "partial": false,
  "label": "6.MP4_snapshot_00.16_[2022.11.05_19.03.45]4EMB-very_compressed-scale-1_00x",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_E389783D_F28A_7D53_41E1_EFEE7E8664BD",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 93.37,
   "hfov": 135,
   "pitch": -1.67
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
    "camera": "this.panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_camera"
   }
  ]
 },
 {
  "class": "Video",
  "label": "Don't look back",
  "video": {
   "height": 360,
   "mp4Url": "media/video_FDC73F9C_F27A_F351_41E0_02EDB89484AC.mp4",
   "width": 638,
   "class": "VideoResource"
  },
  "width": 638,
  "id": "video_FDC73F9C_F27A_F351_41E0_02EDB89484AC",
  "loop": false,
  "height": 360,
  "thumbnailUrl": "media/video_FDC73F9C_F27A_F351_41E0_02EDB89484AC_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "PlayList_E2EAE030_F286_8D51_41E0_4A4F70AEA91C",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidE2DDD021_F286_8D73_41E1_EAA8BD7FAE44VideoPlayer)",
    "media": "this.video_FDC73F9C_F27A_F351_41E0_02EDB89484AC",
    "player": {
     "displayPlaybackBar": true,
     "viewerArea": {
      "transitionDuration": 500,
      "toolTipBorderRadius": 3,
      "progressBorderRadius": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowColor": "#333333",
      "progressBarBorderColor": "#000000",
      "playbackBarBottom": 0,
      "toolTipPaddingBottom": 4,
      "toolTipShadowHorizontalLength": 0,
      "progressBorderColor": "#000000",
      "paddingTop": 0,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "borderRadius": 0,
      "playbackBarHeadOpacity": 1,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "transitionMode": "blending",
      "minHeight": 50,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadWidth": 6,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeight": 10,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarRight": 0,
      "toolTipShadowOpacity": 1,
      "minWidth": 100,
      "playbackBarProgressBorderRadius": 0,
      "toolTipDisplayTime": 600,
      "playbackBarProgressBorderSize": 0,
      "progressBarBorderRadius": 0,
      "progressBarBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipShadowSpread": 0,
      "toolTipOpacity": 1,
      "playbackBarProgressBorderColor": "#000000",
      "borderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "width": "100%",
      "toolTipFontColor": "#606060",
      "toolTipBorderColor": "#767676",
      "paddingRight": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipBorderSize": 1,
      "playbackBarProgressOpacity": 1,
      "paddingBottom": 0,
      "progressLeft": 0,
      "playbackBarBorderSize": 0,
      "toolTipPaddingRight": 6,
      "shadow": false,
      "playbackBarBackgroundOpacity": 1,
      "toolTipFontFamily": "Arial",
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipPaddingTop": 4,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressRight": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "toolTipTextShadowOpacity": 0,
      "progressOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "id": "viewer_uidE27CE833_F28A_7D57_41B9_901244AE400D",
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarBorderColor": "#FFFFFF",
      "progressBackgroundOpacity": 1,
      "height": "100%",
      "paddingLeft": 0,
      "toolTipFontStyle": "normal",
      "progressBarOpacity": 1,
      "toolTipFontSize": 12,
      "class": "ViewerArea",
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderSize": 0,
      "playbackBarOpacity": 1,
      "playbackBarLeft": 0,
      "propagateClick": false,
      "toolTipShadowVerticalLength": 0,
      "toolTipFontWeight": "normal"
     },
     "class": "VideoPlayer",
     "id": "viewer_uidE2DDD021_F286_8D73_41E1_EAA8BD7FAE44VideoPlayer"
    },
    "start": "this.viewer_uidE2DDD021_F286_8D73_41E1_EAA8BD7FAE44VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_E2EAE030_F286_8D51_41E0_4A4F70AEA91C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_E2EAE030_F286_8D51_41E0_4A4F70AEA91C, 0, this.video_FDC73F9C_F27A_F351_41E0_02EDB89484AC)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "4",
  "video": {
   "height": 680,
   "mp4Url": "media/video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82.mp4",
   "width": 1358,
   "class": "VideoResource"
  },
  "width": 3168,
  "id": "video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82",
  "loop": false,
  "height": 1584,
  "thumbnailUrl": "media/video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer"
 },
 {
  "class": "PlayList",
  "id": "playList_E27D2835_F28A_7D53_41EA_0D1E0BDE91A1",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E27D2835_F28A_7D53_41EA_0D1E0BDE91A1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E27D2835_F28A_7D53_41EA_0D1E0BDE91A1, 0, this.video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "videoplayback",
  "video": {
   "height": 360,
   "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4",
   "width": 640,
   "class": "VideoResource"
  },
  "width": 640,
  "id": "video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E",
  "loop": false,
  "height": 360,
  "thumbnailUrl": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_E382E835_F28A_7D53_41E0_E589634FA9B4",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E382E835_F28A_7D53_41E0_E589634FA9B4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E382E835_F28A_7D53_41E0_E589634FA9B4, 0, this.video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "Untitled Project",
  "video": {
   "height": 480,
   "mp4Url": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313.mp4",
   "width": 854,
   "class": "VideoResource"
  },
  "width": 854,
  "id": "video_C4225EF6_CA0B_C018_41B7_D6667882B313",
  "loop": false,
  "height": 480,
  "thumbnailUrl": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_E382D835_F28A_7D53_41B9_0FE6E955A7DA",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C4225EF6_CA0B_C018_41B7_D6667882B313",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E382D835_F28A_7D53_41B9_0FE6E955A7DA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E382D835_F28A_7D53_41B9_0FE6E955A7DA, 0, this.video_C4225EF6_CA0B_C018_41B7_D6667882B313)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "videoplayback (3)",
  "video": {
   "height": 360,
   "mp4Url": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB.mp4",
   "width": 640,
   "class": "VideoResource"
  },
  "width": 640,
  "id": "video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB",
  "loop": false,
  "height": 360,
  "thumbnailUrl": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_E3827836_F28A_7D51_41CA_6D965B1FD709",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E3827836_F28A_7D51_41CA_6D965B1FD709, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E3827836_F28A_7D51_41CA_6D965B1FD709, 0, this.video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "1",
  "video": {
   "height": 720,
   "mp4Url": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E.mp4",
   "width": 1280,
   "class": "VideoResource"
  },
  "width": 1280,
  "id": "video_D98E3897_CA2A_A792_41CB_D4AAA103F65E",
  "loop": false,
  "height": 720,
  "thumbnailUrl": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_E3823836_F28A_7D51_41E7_0DACA557245D",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_D98E3897_CA2A_A792_41CB_D4AAA103F65E",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E3823836_F28A_7D51_41E7_0DACA557245D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E3823836_F28A_7D51_41E7_0DACA557245D, 0, this.video_D98E3897_CA2A_A792_41CB_D4AAA103F65E)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "videoplayback (2)",
  "video": {
   "height": 720,
   "mp4Url": "media/video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6.mp4",
   "width": 1280,
   "class": "VideoResource"
  },
  "width": 1280,
  "id": "video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6",
  "loop": false,
  "height": 720,
  "thumbnailUrl": "media/video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_E3821836_F28A_7D51_41C1_2BF8B04D528C",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E3821836_F28A_7D51_41C1_2BF8B04D528C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E3821836_F28A_7D51_41C1_2BF8B04D528C, 0, this.video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "videoplayback (5)",
  "video": {
   "height": 720,
   "mp4Url": "media/video_F856A78F_EDB3_8137_41E4_D12E3F83119F.mp4",
   "width": 1280,
   "class": "VideoResource"
  },
  "width": 1280,
  "id": "video_F856A78F_EDB3_8137_41E4_D12E3F83119F",
  "loop": false,
  "height": 720,
  "thumbnailUrl": "media/video_F856A78F_EDB3_8137_41E4_D12E3F83119F_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_E383E836_F28A_7D51_41D2_C33C15E83A5A",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_F856A78F_EDB3_8137_41E4_D12E3F83119F",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E383E836_F28A_7D51_41D2_C33C15E83A5A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E383E836_F28A_7D51_41D2_C33C15E83A5A, 0, this.video_F856A78F_EDB3_8137_41E4_D12E3F83119F)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "Manos",
  "video": {
   "height": 720,
   "mp4Url": "media/video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE.mp4",
   "width": 1280,
   "class": "VideoResource"
  },
  "width": 1280,
  "id": "video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE",
  "loop": false,
  "height": 720,
  "thumbnailUrl": "media/video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_E3838836_F28A_7D51_41E2_D28465800EB5",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E3838836_F28A_7D51_41E2_D28465800EB5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E3838836_F28A_7D51_41E2_D28465800EB5, 0, this.video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "mano 2",
  "video": {
   "height": 720,
   "mp4Url": "media/video_5E693D5C_49B2_4282_41D2_4434DC45E897.mp4",
   "width": 1280,
   "class": "VideoResource"
  },
  "width": 1280,
  "id": "video_5E693D5C_49B2_4282_41D2_4434DC45E897",
  "loop": false,
  "height": 720,
  "thumbnailUrl": "media/video_5E693D5C_49B2_4282_41D2_4434DC45E897_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_E3836836_F28A_7D51_41EE_20C9B28EF1E2",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_5E693D5C_49B2_4282_41D2_4434DC45E897",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E3836836_F28A_7D51_41EE_20C9B28EF1E2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E3836836_F28A_7D51_41EE_20C9B28EF1E2, 0, this.video_5E693D5C_49B2_4282_41D2_4434DC45E897)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "manos 3",
  "video": {
   "height": 1280,
   "mp4Url": "media/video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB.mp4",
   "width": 720,
   "class": "VideoResource"
  },
  "width": 720,
  "id": "video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB",
  "loop": false,
  "height": 1280,
  "thumbnailUrl": "media/video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_E3831836_F28A_7D51_41E1_9EA79D3AAF88",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E3831836_F28A_7D51_41E1_9EA79D3AAF88, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E3831836_F28A_7D51_41E1_9EA79D3AAF88, 0, this.video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_E380D837_F28A_7D5F_41BC_2088FDDAD70F",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_FDC73F9C_F27A_F351_41E0_02EDB89484AC",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E380D837_F28A_7D5F_41BC_2088FDDAD70F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E380D837_F28A_7D5F_41BC_2088FDDAD70F, 0, this.video_FDC73F9C_F27A_F351_41E0_02EDB89484AC)"
   }
  ]
 },
 "this.Menu_E389783D_F28A_7D53_41E1_EFEE7E8664BD",
 {
  "easing": "linear",
  "duration": 3000,
  "id": "effect_56FB6E17_49B2_3E8E_41CF_6E6977823125",
  "class": "FadeOutEffect"
 },
 {
  "easing": "quad_in",
  "duration": 500,
  "id": "effect_5115228D_49B2_479D_41C5_A5B943A758AD",
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "duration": 0,
  "id": "effect_51BD5670_4992_4E82_41A0_BE9B07ACCE4F",
  "class": "FadeOutEffect"
 },
 {
  "easing": "quad_in",
  "duration": 1000,
  "id": "effect_5ECE4DD9_4992_FD82_4197_C5FD6F74E5A1",
  "class": "FadeInEffect"
 },
 {
  "closeButtonRollOverIconLineWidth": 5,
  "backgroundColor": [],
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowVerticalLength": 0,
  "titleFontFamily": "Arial",
  "modal": true,
  "bodyBackgroundColorDirection": "vertical",
  "titlePaddingBottom": 5,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "creationPolicy": "delayed",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "closeButtonIconColor": "#000000",
  "closeButtonIconLineWidth": 5,
  "headerBackgroundColorDirection": "vertical",
  "overflow": "scroll",
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "borderRadius": 5,
  "minHeight": 20,
  "gap": 10,
  "bodyPaddingRight": 0,
  "shadowColor": "#000000",
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingLeft": 5,
  "closeButtonPressedIconLineWidth": 5,
  "minWidth": 20,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonBackgroundOpacity": 0.3,
  "bodyPaddingLeft": 0,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonIconHeight": 20,
  "children": [
   "this.viewer_uidE27CE833_F28A_7D57_41B9_901244AE400D"
  ],
  "titlePaddingTop": 5,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "footerBackgroundColorDirection": "vertical",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "borderSize": 0,
  "paddingRight": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "headerPaddingLeft": 10,
  "closeButtonPaddingTop": 5,
  "backgroundColorRatios": [],
  "verticalAlign": "middle",
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingBottom": 5,
  "shadowBlurRadius": 6,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "titleFontSize": 14,
  "closeButtonRollOverIconColor": "#666666",
  "headerPaddingRight": 0,
  "bodyPaddingBottom": 0,
  "closeButtonRollOverBorderSize": 0,
  "shadow": true,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "backgroundOpacity": 1,
  "closeButtonPressedBorderColor": "#000000",
  "footerHeight": 5,
  "shadowHorizontalLength": 3,
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonIconWidth": 20,
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "id": "window_FD107B77_F285_B3DF_41C8_A2C7E8C1F3E3",
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "veilOpacity": 0.4,
  "contentOpaque": false,
  "closeButtonBorderSize": 0,
  "titlePaddingRight": 5,
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "close": "this.PlayList_E2EAE030_F286_8D51_41E0_4A4F70AEA91C.set('selectedIndex', -1);",
  "closeButtonPaddingLeft": 5,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "headerBackgroundOpacity": 0,
  "headerVerticalAlign": "middle",
  "footerBackgroundOpacity": 0,
  "paddingLeft": 0,
  "closeButtonBorderColor": "#000000",
  "closeButtonPaddingRight": 5,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "data": {
   "name": "Window2990"
  },
  "bodyPaddingTop": 0,
  "closeButtonPressedBorderSize": 0,
  "veilColorRatios": [
   0,
   1
  ],
  "propagateClick": false,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "layout": "vertical"
 },
 "this.popup_FC3237A8_F285_B371_41E7_D0C7FDC60341",
 {
  "data": {
   "label": "ES_Piano Ghostly"
  },
  "class": "MediaAudio",
  "id": "audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265.mp3",
   "oggUrl": "media/audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265.ogg"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E39C1852_F28A_7DD1_41D1_3DBC996EEBBD",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 82.54,
   "hfov": 129,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E3AE9860_F28A_7DF1_41E3_63DD7285EA5A",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "yawSpeed": 7.96
    }
   ],
   "id": "sequence_E3AE8860_F28A_7DF1_41DD_563755E94D01"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 78.93,
   "hfov": 135,
   "pitch": 0
  }
 },
 "this.audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9",
 "this.audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F",
 "this.audio_DF46CC02_CA2F_9E6D_41E4_11C404230921",
 "this.audio_F948C705_EDCD_812B_4196_200730E06FB8"
], "children": [
 {
  "transitionDuration": 500,
  "toolTipBorderRadius": 3,
  "progressBorderRadius": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowColor": "#333333",
  "progressBarBorderColor": "#000000",
  "playbackBarBottom": 5,
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "progressBorderColor": "#000000",
  "paddingTop": 0,
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "borderRadius": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "transitionMode": "blending",
  "minHeight": 50,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadWidth": 6,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowOpacity": 1,
  "minWidth": 100,
  "playbackBarProgressBorderRadius": 0,
  "toolTipDisplayTime": 600,
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowSpread": 0,
  "toolTipOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "width": "100%",
  "toolTipFontColor": "#606060",
  "toolTipBorderColor": "#767676",
  "paddingRight": 0,
  "playbackBarHeadBorderSize": 0,
  "toolTipBorderSize": 1,
  "playbackBarProgressOpacity": 1,
  "paddingBottom": 0,
  "progressLeft": 0,
  "playbackBarBorderSize": 0,
  "toolTipPaddingRight": 6,
  "shadow": false,
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontFamily": "Arial",
  "progressBottom": 0,
  "progressHeight": 10,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressRight": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipTextShadowOpacity": 0,
  "progressOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "id": "MainViewer",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundOpacity": 1,
  "height": "100%",
  "paddingLeft": 0,
  "toolTipFontStyle": "normal",
  "progressBarOpacity": 1,
  "toolTipFontSize": 12,
  "class": "ViewerArea",
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBorderSize": 0,
  "playbackBarOpacity": 1,
  "playbackBarLeft": 0,
  "propagateClick": false,
  "toolTipShadowVerticalLength": 0,
  "toolTipFontWeight": "normal"
 },
 {
  "transparencyActive": false,
  "propagateClick": false,
  "horizontalAlign": "center",
  "borderSize": 0,
  "mode": "push",
  "width": 70,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "height": 70,
  "maxHeight": 70,
  "paddingTop": 0,
  "shadow": false,
  "maxWidth": 70,
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "cursor": "hand",
  "minHeight": 1,
  "bottom": "5.11%",
  "id": "IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5",
  "data": {
   "name": "IconButton12329"
  },
  "iconURL": "skin/IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5.png",
  "paddingLeft": 0,
  "minWidth": 1,
  "class": "IconButton",
  "right": "1.1%"
 },
 {
  "transparencyActive": true,
  "propagateClick": false,
  "toolTipBorderRadius": 3,
  "horizontalAlign": "center",
  "borderSize": 0,
  "mode": "toggle",
  "toolTipOpacity": 1,
  "width": 56,
  "toolTipShadowBlurRadius": 3,
  "toolTip": "Fullscreen",
  "toolTipFontColor": "#606060",
  "toolTipBorderColor": "#767676",
  "toolTipShadowSpread": 0,
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingRight": 6,
  "verticalAlign": "middle",
  "height": 34,
  "toolTipShadowColor": "#333333",
  "toolTipFontFamily": "Arial",
  "toolTipBorderSize": 1,
  "maxHeight": 128,
  "toolTipShadowHorizontalLength": 0,
  "paddingTop": 0,
  "shadow": false,
  "toolTipTextShadowColor": "#000000",
  "maxWidth": 128,
  "paddingBottom": 0,
  "toolTipPaddingTop": 4,
  "backgroundOpacity": 0,
  "top": "3.15%",
  "cursor": "hand",
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "minHeight": 1,
  "id": "IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C",
  "data": {
   "name": "IconButton1493"
  },
  "toolTipPaddingBottom": 4,
  "toolTipBackgroundColor": "#F6F6F6",
  "iconURL": "skin/IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C.png",
  "toolTipShadowOpacity": 1,
  "toolTipFontStyle": "normal",
  "paddingLeft": 0,
  "minWidth": 1,
  "class": "IconButton",
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "toolTipDisplayTime": 600,
  "right": "1.1%",
  "toolTipFontWeight": "normal"
 },
 {
  "propagateClick": false,
  "borderSize": 3,
  "shadowVerticalLength": 0,
  "width": "81.322%",
  "scrollBarMargin": 2,
  "paddingRight": 10,
  "paddingBottom": 10,
  "rollOver": "this.setComponentVisibility(this.HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47, true, 0, this.effect_5115228D_49B2_479D_41C5_A5B943A758AD, 'showEffect', false); this.setComponentVisibility(this.HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47, false, 0, this.effect_56FB6E17_49B2_3E8E_41CF_6E6977823125, 'hideEffect', false)",
  "paddingTop": 10,
  "shadowBlurRadius": 6,
  "scrollBarVisible": "rollOver",
  "shadow": true,
  "backgroundOpacity": 0,
  "top": "30.5%",
  "shadowOpacity": 0,
  "visible": false,
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "borderColor": "#000000",
  "borderRadius": 0,
  "shadowSpread": 1,
  "minHeight": 1,
  "id": "HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:75px;font-family:'GrindAndDeath_Demo';\"><B>Horror in Annenkirche</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "data": {
   "name": "T\u00edtulo"
  },
  "shadowColor": "#FFFFFF",
  "height": "30.242%",
  "shadowHorizontalLength": 3,
  "paddingLeft": 10,
  "minWidth": 1,
  "class": "HTMLText",
  "right": "6.42%",
  "scrollBarWidth": 10
 },
 {
  "propagateClick": false,
  "horizontalAlign": "center",
  "fontColor": "#000000",
  "borderSize": 0,
  "fontSize": 22,
  "width": "31.856%",
  "textShadowColor": "#CCCCCC",
  "paddingRight": 0,
  "textDecoration": "none",
  "fontFamily": "Redsniper Classic",
  "text": "CHOOSE YOUR DESTINY",
  "paddingBottom": 0,
  "fontStyle": "normal",
  "rollOver": "this.setComponentVisibility(this.Label_5BB62D95_497E_3D82_41CA_ED3237F26477, true, 0, this.effect_5ECE4DD9_4992_FD82_4197_C5FD6F74E5A1, 'showEffect', false)",
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "click": "this.setComponentVisibility(this.HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47, false, 0, this.effect_51BD5670_4992_4E82_41A0_BE9B07ACCE4F, 'hideEffect', false); this.setComponentVisibility(this.Label_5BB62D95_497E_3D82_41CA_ED3237F26477, false, 0, this.effect_51BD5670_4992_4E82_41A0_BE9B07ACCE4F, 'hideEffect', false)",
  "textShadowOpacity": 0.7,
  "borderRadius": 0,
  "fontWeight": "normal",
  "backgroundOpacity": 0,
  "textShadowHorizontalLength": 1,
  "visible": false,
  "minHeight": 1,
  "bottom": "37.85%",
  "id": "Label_5BB62D95_497E_3D82_41CA_ED3237F26477",
  "height": "14.113%",
  "data": {
   "name": "Label4564"
  },
  "textShadowVerticalLength": 1,
  "textShadowBlurRadius": 3,
  "paddingLeft": 0,
  "minWidth": 1,
  "class": "Label",
  "right": "33.31%"
 },
 {
  "propagateClick": false,
  "backgroundColor": [
   "#000000"
  ],
  "borderSize": 0,
  "paddingRight": 0,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0
  ],
  "shadow": false,
  "paddingTop": 0,
  "backgroundOpacity": 0.55,
  "top": 0,
  "visible": false,
  "borderRadius": 0,
  "minHeight": 0,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "data": {
   "name": "UIComponent3337"
  },
  "paddingLeft": 0,
  "minWidth": 0,
  "class": "UIComponent",
  "left": 0,
  "backgroundColorDirection": "vertical",
  "right": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  }
 },
 {
  "propagateClick": false,
  "backgroundColor": [],
  "borderSize": 0,
  "paddingRight": 0,
  "paddingBottom": 0,
  "backgroundColorRatios": [],
  "shadow": false,
  "paddingTop": 0,
  "scaleMode": "custom",
  "backgroundOpacity": 1,
  "top": 0,
  "visible": false,
  "borderRadius": 0,
  "minHeight": 0,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "data": {
   "name": "ZoomImage3338"
  },
  "paddingLeft": 0,
  "minWidth": 0,
  "class": "ZoomImage",
  "left": 0,
  "backgroundColorDirection": "vertical",
  "right": 0
 },
 {
  "propagateClick": false,
  "horizontalAlign": "center",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "fontColor": "#FFFFFF",
  "fontSize": 12,
  "mode": "push",
  "borderSize": 0,
  "paddingRight": 5,
  "textDecoration": "none",
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "verticalAlign": "middle",
  "iconLineWidth": 5,
  "paddingBottom": 5,
  "fontStyle": "normal",
  "shadow": false,
  "paddingTop": 5,
  "shadowBlurRadius": 6,
  "fontWeight": "normal",
  "backgroundOpacity": 0.3,
  "top": 10,
  "cursor": "hand",
  "visible": false,
  "iconColor": "#000000",
  "pressedIconColor": "#888888",
  "borderColor": "#000000",
  "borderRadius": 0,
  "iconWidth": 20,
  "minHeight": 0,
  "rollOverIconColor": "#666666",
  "id": "closeButtonPopupPanorama",
  "gap": 5,
  "shadowSpread": 1,
  "data": {
   "name": "CloseButton3339"
  },
  "iconBeforeLabel": true,
  "shadowColor": "#000000",
  "iconHeight": 20,
  "paddingLeft": 5,
  "minWidth": 0,
  "class": "CloseButton",
  "backgroundColorDirection": "vertical",
  "right": 10,
  "label": "",
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "layout": "horizontal"
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C].forEach(function(component) { component.set('visible', false); }) }",
 "propagateClick": false,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "mobileMipmappingEnabled": false,
 "width": "100%",
 "borderSize": 0,
 "paddingRight": 0,
 "creationPolicy": "delayed",
 "verticalAlign": "top",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "scripts": {
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "existsKey": function(key){  return key in window; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getKey": function(key){  return window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); }
 },
 "borderRadius": 0,
 "height": "100%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "id": "rootPlayer",
 "data": {
  "name": "Player536"
 },
 "contentOpaque": false,
 "gap": 10,
 "paddingLeft": 0,
 "minWidth": 20,
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 1,
 "buttonToggleFullscreen": "this.IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C",
 "backgroundPreloadEnabled": true,
 "layout": "absolute"
})