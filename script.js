TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 132,
  "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_t.jpg",
  "hfovMax": 134,
  "label": "5.00_00_27_10.Imagen fija002",
  "audios": [
   {
    "data": {
     "label": "ES_Castle Haunted"
    },
    "class": "PanoramaAudio",
    "id": "audio_DF46CC02_CA2F_9E6D_41E4_11C404230921",
    "audio": {
     "mp3Url": "media/audio_DF46CC02_CA2F_9E6D_41E4_11C404230921.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_DF46CC02_CA2F_9E6D_41E4_11C404230921.ogg"
    },
    "autoplay": true
   }
  ],
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_t.jpg",
    "overlays": [
     {
      "video": {
       "height": 480,
       "class": "VideoResource",
       "width": 854,
       "mp4Url": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313.mp4"
      },
      "vfov": 26.38,
      "autoplay": true,
      "videoVisibleOnStop": false,
      "data": {
       "label": "Video"
      },
      "blending": 0.08,
      "chromaSmoothing": 0.1,
      "id": "overlay_C5ACBA36_CA04_401B_41D0_CC3DFF353F5C",
      "loop": true,
      "rotationX": 6.05,
      "roll": -2.59,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 2,
         "class": "ImageResourceLevel",
         "width": 2,
         "url": "media/overlay_C5ACBA36_CA04_401B_41D0_CC3DFF353F5C_t.png"
        }
       ]
      },
      "rotationY": -11.11,
      "chromaThreshold": 0.24,
      "pitch": -8.36,
      "hfov": 31.49,
      "class": "VideoPanoramaOverlay",
      "yaw": 82.05,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "chromaColor": "#28C034"
     },
     {
      "hfov": 45.6,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_tcap0",
      "inertia": false,
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_tcap0.png"
        }
       ]
      },
      "angle": 0
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 87.85,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 62.8,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 159,
           "class": "ImageResourceLevel",
           "width": 200,
           "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_0_HS_5_1_0_map.gif"
          }
         ]
        },
        "pitch": 24.93
       }
      ],
      "id": "overlay_4488E140_4A70_EF6A_4183_1301795CB82C",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 79.24,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -54.22,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 122,
           "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_0_HS_6_1_0_map.gif"
          }
         ]
        },
        "pitch": 13.46
       }
      ],
      "id": "overlay_5A65D056_4A70_ED16_41A0_FC863A38AC38",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true
     }
    ]
   }
  ]
 },
 {
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "buttonCardboardView": "this.IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "initialPosition": {
   "hfov": 132,
   "class": "PanoramaCameraPosition",
   "yaw": 1.63,
   "pitch": 9.95
  },
  "class": "PanoramaCamera",
  "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A",
  "adjacentPanoramas": [
   {
    "panorama": {
     "partial": false,
     "vfov": 180,
     "hfovMin": 60,
     "id": "panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E",
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A",
       "class": "AdjacentPanorama",
       "backwardYaw": -97.46,
       "yaw": -101.07,
       "distance": 1
      }
     ],
     "pitch": 0,
     "hfov": 360,
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_t.jpg",
     "hfovMax": 140,
     "label": "2.00_00_13_18.Imagen fija003",
     "audios": [
      {
       "data": {
        "label": "ES_Ghosting"
       },
       "class": "PanoramaAudio",
       "id": "audio_F948C705_EDCD_812B_4196_200730E06FB8",
       "audio": {
        "mp3Url": "media/audio_F948C705_EDCD_812B_4196_200730E06FB8.mp3",
        "class": "AudioResource",
        "oggUrl": "media/audio_F948C705_EDCD_812B_4196_200730E06FB8.ogg"
       },
       "autoplay": true
      }
     ],
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2880,
          "class": "ImageResourceLevel",
          "width": 5760,
          "url": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E.jpeg"
         }
        ]
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_t.jpg",
       "overlays": [
        {
         "hfov": 45.6,
         "class": "TripodCapPanoramaOverlay",
         "id": "panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_tcap0",
         "inertia": false,
         "rotate": false,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "height": 850,
            "class": "ImageResourceLevel",
            "width": 850,
            "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_tcap0.png"
           }
          ]
         },
         "angle": 0
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 43.78,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -14.59,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 184,
              "class": "ImageResourceLevel",
              "width": 200,
              "url": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_0_HS_1_1_0_map.gif"
             }
            ]
           },
           "pitch": -34.01
          }
         ],
         "id": "overlay_F86FD138_EDCD_8159_41E2_9EB3FCB3B587",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265)"
          }
         ],
         "data": {
          "label": "Polygon"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true
        },
        {
         "video": {
          "height": 1280,
          "class": "VideoResource",
          "width": 720,
          "mp4Url": "media/video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB.mp4"
         },
         "autoplay": false,
         "videoVisibleOnStop": true,
         "vfov": 52.48,
         "blending": 0.26,
         "chromaSmoothing": 0.03,
         "id": "overlay_5CFDAA7C_499D_C682_41CC_71AC29719C8F",
         "data": {
          "label": "Video"
         },
         "loop": true,
         "rotationX": 3.96,
         "roll": -1.16,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "height": 1280,
            "class": "ImageResourceLevel",
            "width": 720,
            "url": "media/overlay_5CFDAA7C_499D_C682_41CC_71AC29719C8F_t.png"
           }
          ]
         },
         "rotationY": -6.13,
         "chromaThreshold": 0.28,
         "pitch": -9.06,
         "hfov": 23.51,
         "class": "VideoPanoramaOverlay",
         "yaw": 50.6,
         "enabledInCardboard": true,
         "useHandCursor": true,
         "chromaColor": "#28C034",
         "click": "this.overlay_5CFDAA7C_499D_C682_41CC_71AC29719C8F.play()"
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 76.88,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -101.07,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 94,
              "url": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_0_HS_5_1_0_map.gif"
             }
            ]
           },
           "pitch": 0.94
          }
         ],
         "id": "overlay_5871DA47_4A90_7D76_41C0_057CFAEE46B7",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A, this.camera_97DA4E64_8783_41BB_41E0_0ACF219402B1); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "data": {
          "label": "Polygon"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true
        }
       ]
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": -101.07,
    "yaw": -97.46,
    "distance": 1
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_t.jpg",
  "hfovMax": 133,
  "label": "YIVR_Stitch_C0895001_0895_360_190926080439_360_equi_equi",
  "audios": [
   {
    "data": {
     "label": "ES_Dark Element 4"
    },
    "class": "PanoramaAudio",
    "id": "audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F",
    "audio": {
     "mp3Url": "media/audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F.ogg"
    },
    "autoplay": true
   }
  ],
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_t.jpg",
    "overlays": [
     {
      "video": {
       "height": 360,
       "class": "VideoResource",
       "width": 640,
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4"
      },
      "autoplay": false,
      "videoVisibleOnStop": false,
      "vfov": 33.31,
      "blending": 0,
      "chromaSmoothing": 0,
      "id": "overlay_DB9B7068_CA67_E6BE_41C8_1A09D8B026FC",
      "data": {
       "label": "Video"
      },
      "loop": false,
      "rotationX": 8.05,
      "roll": 2.67,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 360,
         "class": "ImageResourceLevel",
         "width": 640,
         "url": "media/overlay_DB9B7068_CA67_E6BE_41C8_1A09D8B026FC_t.png"
        }
       ]
      },
      "rotationY": -4.93,
      "chromaThreshold": 0.22,
      "pitch": -7.57,
      "hfov": 18.88,
      "class": "VideoPanoramaOverlay",
      "yaw": -164.61,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "chromaColor": "#28C034",
      "click": "this.overlay_DB9B7068_CA67_E6BE_41C8_1A09D8B026FC.play()"
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 30.73,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -97.46,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 104,
           "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_0_HS_6_1_0_map.gif"
          }
         ]
        },
        "pitch": 6.61
       }
      ],
      "id": "overlay_5BD221A9_4A70_2F3B_417E_28D1D33151AF",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E, this.camera_97D3BE71_8783_419D_41D0_D79626A4FE9F); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 50.7,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 81.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 152,
           "class": "ImageResourceLevel",
           "width": 200,
           "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_0_HS_7_1_0_map.gif"
          }
         ]
        },
        "pitch": -46.71
       }
      ],
      "id": "overlay_596710E9_4A90_2D3A_41C8_31F8E5DCEB1F",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 23.64,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 70.35,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 158,
           "class": "ImageResourceLevel",
           "width": 191,
           "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_0_HS_8_1_0_map.gif"
          }
         ]
        },
        "pitch": -23.94
       }
      ],
      "id": "overlay_FF693958_F239_495F_41E5_9CBEA4C6AE3C",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true
     }
    ]
   }
  ]
 },
 {
  "initialPosition": {
   "hfov": 129,
   "class": "PanoramaCameraPosition",
   "yaw": 31.13,
   "pitch": -15.45
  },
  "class": "PanoramaCamera",
  "id": "panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_t.jpg",
  "hfovMax": 130,
  "label": "5.00_00_00_00.Imagen fija001",
  "audios": [
   {
    "data": {
     "label": "ES_Heartbeat Slow"
    },
    "class": "PanoramaAudio",
    "id": "audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9",
    "audio": {
     "mp3Url": "media/audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9.ogg"
    },
    "autoplay": true
   }
  ],
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_t.jpg",
    "overlays": [
     {
      "video": {
       "height": 360,
       "class": "VideoResource",
       "width": 640,
       "mp4Url": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB.mp4"
      },
      "vfov": 48.94,
      "autoplay": true,
      "videoVisibleOnStop": false,
      "data": {
       "label": "Video"
      },
      "blending": 0.07,
      "chromaSmoothing": 0.78,
      "id": "overlay_C1DF9AA0_CA27_BBAE_41E8_5775E3BF675F",
      "loop": true,
      "rotationX": 31.76,
      "roll": -14.8,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 2,
         "class": "ImageResourceLevel",
         "width": 2,
         "url": "media/overlay_C1DF9AA0_CA27_BBAE_41E8_5775E3BF675F_t.png"
        }
       ]
      },
      "rotationY": -24.56,
      "chromaThreshold": 0.31,
      "pitch": -26.98,
      "hfov": 23.08,
      "class": "VideoPanoramaOverlay",
      "yaw": 10.52,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "chromaColor": "#28C034"
     },
     {
      "video": {
       "height": 720,
       "class": "VideoResource",
       "width": 1280,
       "mp4Url": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E.mp4"
      },
      "vfov": 14.55,
      "autoplay": true,
      "videoVisibleOnStop": false,
      "data": {
       "label": "Video"
      },
      "blending": 0,
      "chromaSmoothing": 0.06,
      "id": "overlay_D82771DC_CA2A_A996_41D2_045CE5C504DE",
      "loop": true,
      "rotationX": 5.23,
      "roll": 0.64,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 720,
         "class": "ImageResourceLevel",
         "width": 1280,
         "url": "media/overlay_D82771DC_CA2A_A996_41D2_045CE5C504DE_t.png"
        }
       ]
      },
      "rotationY": -5.12,
      "chromaThreshold": 0.14,
      "pitch": 5.18,
      "hfov": 12.07,
      "class": "VideoPanoramaOverlay",
      "yaw": -40.31,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "chromaColor": "#28C034"
     },
     {
      "hfov": 45.6,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_tcap0",
      "inertia": false,
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_tcap0.png"
        }
       ]
      },
      "angle": 0
     },
     {
      "video": {
       "height": 360,
       "class": "VideoResource",
       "width": 640,
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4"
      },
      "autoplay": false,
      "videoVisibleOnStop": false,
      "vfov": 38.22,
      "blending": 0,
      "chromaSmoothing": 0,
      "id": "overlay_107D7FD3_1E32_BE64_4171_11A206EF3984",
      "data": {
       "label": "Video"
      },
      "loop": false,
      "rotationX": 12.43,
      "roll": -4.59,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 360,
         "class": "ImageResourceLevel",
         "width": 640,
         "url": "media/overlay_107D7FD3_1E32_BE64_4171_11A206EF3984_t.png"
        }
       ]
      },
      "rotationY": -10.67,
      "chromaThreshold": 0.24,
      "pitch": -14.63,
      "hfov": 24.23,
      "class": "VideoPanoramaOverlay",
      "yaw": 127.72,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "chromaColor": "#28C034",
      "click": "this.overlay_107D7FD3_1E32_BE64_4171_11A206EF3984.play()"
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 8.57,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -22.14,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 38,
           "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "pitch": -6.26
       }
      ],
      "id": "overlay_5B04C75A_4A70_D319_41BE_BEBD6317C3FB",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 5.28,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 82.49,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 39,
           "class": "ImageResourceLevel",
           "width": 42,
           "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_0_HS_2_1_0_map.gif"
          }
         ]
        },
        "pitch": 8.2
       }
      ],
      "id": "overlay_FE2F1DEC_F24B_B7AB_41D6_59AF31B58A0B",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 5.28,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "yaw": 82.49,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 79,
           "class": "ImageResourceLevel",
           "width": 84,
           "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 8.2
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 5.87,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 82.19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 46,
           "class": "ImageResourceLevel",
           "width": 46,
           "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_0_HS_3_1_0_map.gif"
          }
         ]
        },
        "pitch": 8.49
       }
      ],
      "id": "overlay_FF27A2DC_F285_92D1_41E2_6D70DF6C31D6",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_FC3237A8_F285_B371_41E7_D0C7FDC60341, {'rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'paddingRight':5,'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'rollOverBorderColor':'#000000','borderSize':0,'pressedBackgroundOpacity':0.3,'pressedBorderColor':'#000000','paddingTop':5,'iconColor':'#000000','pressedIconColor':'#888888','iconLineWidth':5,'iconWidth':20,'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconHeight':20,'pressedBorderSize':0}) } else { this.showPopupMedia(this.window_8E637608_8782_C18B_41BF_0A2D9F59B739, this.video_97B394C5_86FB_3633_41D6_51543E121940, this.PlayList_88319184_8783_437B_41B7_69B73156628A, '95%', '95%', true, true); this.PlayList_88319184_8783_437B_41B7_69B73156628A.set('selectedIndex', 0); ; this.viewer_uid882E9177_8783_4385_41D2_80FBC0086B88VideoPlayer.play();  }"
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true
     },
     {
      "hfov": 5.43,
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "yaw": 82.19,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 500,
      "hideEasing": "cubic_out",
      "video": {
       "height": 360,
       "class": "VideoResource",
       "width": 638,
       "mp4Url": "media/video_97B394C5_86FB_3633_41D6_51543E121940.mp4"
      },
      "id": "popup_FC3237A8_F285_B371_41E7_D0C7FDC60341",
      "loop": false,
      "rotationX": 0,
      "hideDuration": 500,
      "autoplay": true,
      "rotationY": 0,
      "showEasing": "cubic_in",
      "pitch": 8.49
     }
    ]
   }
  ]
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 133.98,
   "pitch": -8.85
  },
  "class": "PanoramaCamera",
  "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "easing": "cubic_in",
     "yawSpeed": 10.61
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -323,
     "easing": "linear",
     "yawSpeed": 10.61
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "easing": "cubic_out",
     "yawSpeed": 10.61
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E",
 {
  "initialPosition": {
   "hfov": 135,
   "class": "PanoramaCameraPosition",
   "yaw": -177.38,
   "pitch": -3.98
  },
  "class": "PanoramaCamera",
  "id": "panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "id": "sequence_FF66E78E_EDDC_8136_41EA_4F751DDC3DAE",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_t.jpg",
  "hfovMax": 142,
  "label": "6.MP4_snapshot_00.16_[2022.11.05_19.03.45]4EMB-very_compressed-scale-1_00x",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_t.jpg",
    "overlays": [
     {
      "video": {
       "height": 360,
       "class": "VideoResource",
       "width": 640,
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4"
      },
      "autoplay": false,
      "videoVisibleOnStop": false,
      "vfov": 74.36,
      "blending": 0,
      "chromaSmoothing": 0.06,
      "id": "overlay_51EB61E8_499E_C582_41B6_3662F2DDE86A",
      "data": {
       "label": "Video"
      },
      "loop": false,
      "rotationX": 27.78,
      "roll": 6.14,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 360,
         "class": "ImageResourceLevel",
         "width": 640,
         "url": "media/overlay_51EB61E8_499E_C582_41B6_3662F2DDE86A_t.png"
        }
       ]
      },
      "rotationY": 4.18,
      "chromaThreshold": 0.19,
      "pitch": -30.73,
      "hfov": 38.75,
      "class": "VideoPanoramaOverlay",
      "yaw": -78.35,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "chromaColor": "#28C034",
      "click": "this.overlay_51EB61E8_499E_C582_41B6_3662F2DDE86A.play()"
     },
     {
      "hfov": 45.6,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_tcap0",
      "inertia": false,
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_tcap0.png"
        }
       ]
      },
      "angle": 0
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 35.3,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 81.16,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 200,
           "url": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": -25.31
       }
      ],
      "id": "overlay_5B4CE40A_4A70_74FE_41C1_95BC8C081B22",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true
     },
     {
      "video": {
       "height": 720,
       "class": "VideoResource",
       "width": 1280,
       "mp4Url": "media/video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE.mp4"
      },
      "autoplay": false,
      "videoVisibleOnStop": false,
      "vfov": 27.01,
      "blending": 0.16,
      "chromaSmoothing": 0,
      "id": "overlay_8898042C_8783_C18B_41DA_5A18267B6637",
      "data": {
       "label": "Video"
      },
      "loop": false,
      "rotationX": 9.62,
      "roll": 3.43,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 2,
         "class": "ImageResourceLevel",
         "width": 2,
         "url": "media/overlay_8898042C_8783_C18B_41DA_5A18267B6637_t.png"
        }
       ]
      },
      "rotationY": 5.52,
      "chromaThreshold": 0.21,
      "pitch": -13.42,
      "hfov": 23.72,
      "class": "VideoPanoramaOverlay",
      "yaw": -169.38,
      "enabledInCardboard": true,
      "useHandCursor": true,
      "chromaColor": "#28C034",
      "click": "if(this.overlay_8898042C_8783_C18B_41DA_5A18267B6637.get('state') != 'playing'){ this.overlay_8898042C_8783_C18B_41DA_5A18267B6637.play(); } else { this.overlay_8898042C_8783_C18B_41DA_5A18267B6637.stop(); }"
     }
    ]
   }
  ]
 },
 {
  "initialPosition": {
   "hfov": 135,
   "class": "PanoramaCameraPosition",
   "yaw": 93.37,
   "pitch": -1.67
  },
  "class": "PanoramaCamera",
  "id": "panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
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
  "thumbnailUrl": "media/video_97B394C5_86FB_3633_41D6_51543E121940_t.jpg",
  "label": "Don't look back",
  "video": {
   "height": 360,
   "class": "VideoResource",
   "width": 638,
   "mp4Url": "media/video_97B394C5_86FB_3633_41D6_51543E121940.mp4"
  },
  "width": 638,
  "id": "video_97B394C5_86FB_3633_41D6_51543E121940",
  "loop": false,
  "height": 360,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "PlayList_88319184_8783_437B_41B7_69B73156628A",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": {
     "displayPlaybackBar": true,
     "class": "VideoPlayer",
     "viewerArea": {
      "toolTipPaddingBottom": 4,
      "progressBackgroundOpacity": 1,
      "paddingRight": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarOpacity": 1,
      "borderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "paddingBottom": 0,
      "transitionDuration": 500,
      "progressBorderSize": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderRadius": 0,
      "playbackBarLeft": 0,
      "progressBarOpacity": 1,
      "playbackBarHeadHeight": 15,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipBorderSize": 1,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBorderColor": "#000000",
      "toolTipDisplayTime": 600,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "transitionMode": "blending",
      "progressBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "playbackBarHeadOpacity": 1,
      "toolTipBorderColor": "#767676",
      "minHeight": 50,
      "toolTipShadowSpread": 0,
      "playbackBarBottom": 0,
      "toolTipFontColor": "#606060",
      "class": "ViewerArea",
      "paddingLeft": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeight": 10,
      "minWidth": 100,
      "playbackBarHeadWidth": 6,
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipPaddingRight": 6,
      "toolTipOpacity": 1,
      "playbackBarRight": 0,
      "toolTipFontWeight": "normal",
      "toolTipPaddingTop": 4,
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarProgressBorderSize": 0,
      "progressBarBorderSize": 0,
      "progressBarBorderRadius": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "height": "100%",
      "width": "100%",
      "playbackBarHeadShadowVerticalLength": 0,
      "paddingTop": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipTextShadowOpacity": 0,
      "playbackBarBorderRadius": 0,
      "shadow": false,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "toolTipBorderRadius": 3,
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipFontStyle": "normal",
      "playbackBarBackgroundOpacity": 1,
      "toolTipFontSize": 12,
      "progressBottom": 2,
      "id": "viewer_uid97CB6E4A_8783_418F_41B2_E267B37D99B2",
      "progressHeight": 10,
      "borderSize": 0,
      "playbackBarBorderSize": 0,
      "playbackBarHeadShadowColor": "#000000",
      "toolTipTextShadowBlurRadius": 3,
      "propagateClick": false,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressOpacity": 1,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "toolTipShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadShadowHorizontalLength": 0,
      "toolTipShadowColor": "#333333",
      "playbackBarHeadShadow": true,
      "toolTipTextShadowColor": "#000000"
     },
     "id": "viewer_uid882E9177_8783_4385_41D2_80FBC0086B88VideoPlayer"
    },
    "media": "this.video_97B394C5_86FB_3633_41D6_51543E121940",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid882E9177_8783_4385_41D2_80FBC0086B88VideoPlayer)",
    "start": "this.viewer_uid882E9177_8783_4385_41D2_80FBC0086B88VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_88319184_8783_437B_41B7_69B73156628A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_88319184_8783_437B_41B7_69B73156628A, 0, this.video_97B394C5_86FB_3633_41D6_51543E121940)"
   }
  ]
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82_t.jpg",
  "label": "4",
  "video": {
   "height": 680,
   "class": "VideoResource",
   "width": 1358,
   "mp4Url": "media/video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82.mp4"
  },
  "width": 3168,
  "id": "video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82",
  "loop": false,
  "height": 1584,
  "scaleMode": "fit_inside"
 },
 {
  "displayPlaybackBar": true,
  "class": "VideoPlayer",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer"
 },
 {
  "class": "PlayList",
  "id": "playList_97C9EE4C_8783_418B_41D0_600817F34D15",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_97C9EE4C_8783_418B_41D0_600817F34D15, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_97C9EE4C_8783_418B_41D0_600817F34D15, 0, this.video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82)"
   }
  ]
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E_t.jpg",
  "label": "videoplayback",
  "video": {
   "height": 360,
   "class": "VideoResource",
   "width": 640,
   "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4"
  },
  "width": 640,
  "id": "video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E",
  "loop": false,
  "height": 360,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_97C93E4C_8783_418B_41D2_234107660112",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_97C93E4C_8783_418B_41D2_234107660112, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_97C93E4C_8783_418B_41D2_234107660112, 0, this.video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E)"
   }
  ]
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313_t.jpg",
  "label": "Untitled Project",
  "video": {
   "height": 480,
   "class": "VideoResource",
   "width": 854,
   "mp4Url": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313.mp4"
  },
  "width": 854,
  "id": "video_C4225EF6_CA0B_C018_41B7_D6667882B313",
  "loop": false,
  "height": 480,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_97C92E4C_8783_418B_41D1_F25C741CC649",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_C4225EF6_CA0B_C018_41B7_D6667882B313",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_97C92E4C_8783_418B_41D1_F25C741CC649, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_97C92E4C_8783_418B_41D1_F25C741CC649, 0, this.video_C4225EF6_CA0B_C018_41B7_D6667882B313)"
   }
  ]
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB_t.jpg",
  "label": "videoplayback (3)",
  "video": {
   "height": 360,
   "class": "VideoResource",
   "width": 640,
   "mp4Url": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB.mp4"
  },
  "width": 640,
  "id": "video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB",
  "loop": false,
  "height": 360,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_97C90E4C_8783_418B_41D4_AD015B9986D1",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_97C90E4C_8783_418B_41D4_AD015B9986D1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_97C90E4C_8783_418B_41D4_AD015B9986D1, 0, this.video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB)"
   }
  ]
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E_t.jpg",
  "label": "1",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "width": 1280,
   "mp4Url": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E.mp4"
  },
  "width": 1280,
  "id": "video_D98E3897_CA2A_A792_41CB_D4AAA103F65E",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_97C97E4C_8783_418B_41C4_75A40B845645",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_D98E3897_CA2A_A792_41CB_D4AAA103F65E",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_97C97E4C_8783_418B_41C4_75A40B845645, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_97C97E4C_8783_418B_41C4_75A40B845645, 0, this.video_D98E3897_CA2A_A792_41CB_D4AAA103F65E)"
   }
  ]
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6_t.jpg",
  "label": "videoplayback (2)",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "width": 1280,
   "mp4Url": "media/video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6.mp4"
  },
  "width": 1280,
  "id": "video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_97C94E4C_8783_418B_41E0_56EFD4823BED",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_97C94E4C_8783_418B_41E0_56EFD4823BED, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_97C94E4C_8783_418B_41E0_56EFD4823BED, 0, this.video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6)"
   }
  ]
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_F856A78F_EDB3_8137_41E4_D12E3F83119F_t.jpg",
  "label": "videoplayback (5)",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "width": 1280,
   "mp4Url": "media/video_F856A78F_EDB3_8137_41E4_D12E3F83119F.mp4"
  },
  "width": 1280,
  "id": "video_F856A78F_EDB3_8137_41E4_D12E3F83119F",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_97C8BE4C_8783_418B_41D2_407D5E63A22B",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F856A78F_EDB3_8137_41E4_D12E3F83119F",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_97C8BE4C_8783_418B_41D2_407D5E63A22B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_97C8BE4C_8783_418B_41D2_407D5E63A22B, 0, this.video_F856A78F_EDB3_8137_41E4_D12E3F83119F)"
   }
  ]
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE_t.jpg",
  "label": "Manos",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "width": 1280,
   "mp4Url": "media/video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE.mp4"
  },
  "width": 1280,
  "id": "video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_97C8AE4C_8783_418B_41B2_5DCA754E7D05",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_97C8AE4C_8783_418B_41B2_5DCA754E7D05, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_97C8AE4C_8783_418B_41B2_5DCA754E7D05, 0, this.video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE)"
   }
  ]
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_5E693D5C_49B2_4282_41D2_4434DC45E897_t.jpg",
  "label": "mano 2",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "width": 1280,
   "mp4Url": "media/video_5E693D5C_49B2_4282_41D2_4434DC45E897.mp4"
  },
  "width": 1280,
  "id": "video_5E693D5C_49B2_4282_41D2_4434DC45E897",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_97C88E4D_8783_4185_41B4_DD17C49B4446",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_5E693D5C_49B2_4282_41D2_4434DC45E897",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_97C88E4D_8783_4185_41B4_DD17C49B4446, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_97C88E4D_8783_4185_41B4_DD17C49B4446, 0, this.video_5E693D5C_49B2_4282_41D2_4434DC45E897)"
   }
  ]
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB_t.jpg",
  "label": "manos 3",
  "video": {
   "height": 1280,
   "class": "VideoResource",
   "width": 720,
   "mp4Url": "media/video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB.mp4"
  },
  "width": 720,
  "id": "video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB",
  "loop": false,
  "height": 1280,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_97C8EE4D_8783_4185_41DC_B951FD9D6287",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_97C8EE4D_8783_4185_41DC_B951FD9D6287, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_97C8EE4D_8783_4185_41DC_B951FD9D6287, 0, this.video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_97C8DE4D_8783_4185_41CC_7949BF2B4653",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_97B394C5_86FB_3633_41D6_51543E121940",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_97C8DE4D_8783_4185_41CC_7949BF2B4653, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_97C8DE4D_8783_4185_41CC_7949BF2B4653, 0, this.video_97B394C5_86FB_3633_41D6_51543E121940)"
   }
  ]
 },
 {
  "class": "FadeOutEffect",
  "duration": 3000,
  "id": "effect_56FB6E17_49B2_3E8E_41CF_6E6977823125",
  "easing": "linear"
 },
 {
  "class": "FadeInEffect",
  "duration": 500,
  "id": "effect_5115228D_49B2_479D_41C5_A5B943A758AD",
  "easing": "quad_in"
 },
 {
  "class": "FadeOutEffect",
  "duration": 0,
  "id": "effect_51BD5670_4992_4E82_41A0_BE9B07ACCE4F",
  "easing": "linear"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_5ECE4DD9_4992_FD82_4197_C5FD6F74E5A1",
  "easing": "quad_in"
 },
 {
  "footerBackgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "paddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "borderRadius": 5,
  "shadowVerticalLength": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColor": [],
  "paddingBottom": 0,
  "closeButtonPressedBorderSize": 0,
  "verticalAlign": "middle",
  "titleFontFamily": "Arial",
  "modal": true,
  "creationPolicy": "delayed",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "shadowOpacity": 0.5,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "titlePaddingBottom": 5,
  "overflow": "scroll",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonIconLineWidth": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "horizontalAlign": "center",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorDirection": "vertical",
  "closeButtonIconColor": "#000000",
  "minHeight": 20,
  "backgroundColorRatios": [],
  "class": "Window",
  "paddingLeft": 0,
  "shadowColor": "#000000",
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "shadowBlurRadius": 6,
  "scrollBarWidth": 10,
  "minWidth": 20,
  "bodyPaddingRight": 0,
  "titlePaddingLeft": 5,
  "closeButtonPressedIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "children": [
   "this.viewer_uid97CB6E4A_8783_418F_41B2_E267B37D99B2"
  ],
  "closeButtonPressedIconColor": "#888888",
  "footerHeight": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "backgroundOpacity": 1,
  "shadowSpread": 1,
  "closeButtonBackgroundOpacity": 0.3,
  "bodyPaddingLeft": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonIconHeight": 20,
  "closeButtonRollOverBorderColor": "#000000",
  "paddingTop": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "shadow": true,
  "headerPaddingLeft": 10,
  "headerPaddingRight": 0,
  "veilOpacity": 0.4,
  "headerPaddingBottom": 5,
  "headerPaddingTop": 10,
  "closeButtonPaddingBottom": 5,
  "closeButtonPaddingTop": 5,
  "backgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "contentOpaque": false,
  "closeButtonRollOverIconColor": "#666666",
  "id": "window_8E637608_8782_C18B_41BF_0A2D9F59B739",
  "close": "this.PlayList_88319184_8783_437B_41B7_69B73156628A.set('selectedIndex', -1);",
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonRollOverBorderSize": 0,
  "bodyBackgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "data": {
   "name": "Window338"
  },
  "borderSize": 0,
  "propagateClick": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBorderSize": 0,
  "titlePaddingRight": 5,
  "closeButtonIconWidth": 20,
  "closeButtonPaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPaddingRight": 5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerVerticalAlign": "middle",
  "scrollBarMargin": 2,
  "closeButtonBorderColor": "#000000",
  "layout": "vertical"
 },
 "this.popup_FC3237A8_F285_B371_41E7_D0C7FDC60341",
 {
  "data": {
   "label": "ES_Piano Ghostly"
  },
  "class": "MediaAudio",
  "id": "audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265",
  "audio": {
   "mp3Url": "media/audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265.ogg"
  },
  "autoplay": true
 },
 {
  "initialPosition": {
   "hfov": 129,
   "class": "PanoramaCameraPosition",
   "yaw": 82.54,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_97DA4E64_8783_41BB_41E0_0ACF219402B1",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "hfov": 135,
   "class": "PanoramaCameraPosition",
   "yaw": 78.93,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_97D3BE71_8783_419D_41D0_D79626A4FE9F",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "id": "sequence_97D3AE71_8783_419D_41D0_74C1D75693BE",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9",
 "this.audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F",
 "this.audio_DF46CC02_CA2F_9E6D_41E4_11C404230921",
 "this.audio_F948C705_EDCD_812B_4196_200730E06FB8"
], "children": [
 {
  "toolTipPaddingBottom": 4,
  "progressBackgroundOpacity": 1,
  "paddingRight": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarOpacity": 1,
  "borderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "paddingBottom": 0,
  "transitionDuration": 500,
  "progressBorderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBorderRadius": 0,
  "playbackBarLeft": 0,
  "progressBarOpacity": 1,
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "toolTipPaddingLeft": 6,
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "toolTipDisplayTime": 600,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "transitionMode": "blending",
  "progressBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "toolTipBorderColor": "#767676",
  "minHeight": 50,
  "toolTipShadowSpread": 0,
  "playbackBarBottom": 5,
  "toolTipFontColor": "#606060",
  "class": "ViewerArea",
  "paddingLeft": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "minWidth": 100,
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "playbackBarRight": 0,
  "toolTipFontWeight": "normal",
  "toolTipPaddingTop": 4,
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "height": "100%",
  "width": "100%",
  "playbackBarHeadShadowVerticalLength": 0,
  "paddingTop": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "playbackBarBorderRadius": 0,
  "shadow": false,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "toolTipBorderRadius": 3,
  "progressLeft": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontSize": 12,
  "progressBottom": 0,
  "id": "MainViewer",
  "progressHeight": 10,
  "borderSize": 0,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "propagateClick": false,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressOpacity": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000"
 },
 {
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "iconURL": "skin/IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5.png",
  "paddingRight": 0,
  "borderRadius": 0,
  "mode": "push",
  "width": 70,
  "paddingBottom": 0,
  "height": 70,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "shadow": false,
  "maxWidth": 70,
  "maxHeight": 70,
  "cursor": "hand",
  "bottom": "5.11%",
  "horizontalAlign": "center",
  "minHeight": 1,
  "id": "IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5",
  "data": {
   "name": "IconButton12329"
  },
  "borderSize": 0,
  "class": "IconButton",
  "propagateClick": false,
  "minWidth": 1,
  "transparencyActive": false,
  "right": "1.1%"
 },
 {
  "paddingLeft": 0,
  "toolTipPaddingBottom": 4,
  "backgroundOpacity": 0,
  "iconURL": "skin/IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C.png",
  "paddingRight": 0,
  "toolTip": "Fullscreen",
  "borderRadius": 0,
  "mode": "toggle",
  "width": 56,
  "paddingBottom": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "height": 34,
  "toolTipShadowHorizontalLength": 0,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "toolTipTextShadowOpacity": 0,
  "shadow": false,
  "maxWidth": 128,
  "maxHeight": 128,
  "toolTipShadowOpacity": 1,
  "toolTipBorderRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipBorderSize": 1,
  "top": "3.15%",
  "toolTipDisplayTime": 600,
  "cursor": "hand",
  "toolTipFontStyle": "normal",
  "horizontalAlign": "center",
  "minHeight": 1,
  "toolTipFontSize": 12,
  "id": "IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C",
  "toolTipBorderColor": "#767676",
  "data": {
   "name": "IconButton1493"
  },
  "borderSize": 0,
  "toolTipShadowSpread": 0,
  "toolTipFontColor": "#606060",
  "class": "IconButton",
  "toolTipTextShadowBlurRadius": 3,
  "propagateClick": false,
  "toolTipShadowVerticalLength": 0,
  "minWidth": 1,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "toolTipShadowColor": "#333333",
  "transparencyActive": true,
  "toolTipPaddingTop": 4,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontFamily": "Arial",
  "right": "1.1%",
  "toolTipFontWeight": "normal"
 },
 {
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0,
  "shadowSpread": 1,
  "paddingRight": 10,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "shadowVerticalLength": 0,
  "borderColor": "#000000",
  "paddingBottom": 10,
  "scrollBarColor": "#000000",
  "width": "81.322%",
  "scrollBarVisible": "rollOver",
  "height": "30.242%",
  "rollOver": "this.setComponentVisibility(this.HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47, true, 0, this.effect_5115228D_49B2_479D_41C5_A5B943A758AD, 'showEffect', false); this.setComponentVisibility(this.HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47, false, 0, this.effect_56FB6E17_49B2_3E8E_41CF_6E6977823125, 'hideEffect', false)",
  "shadowOpacity": 0,
  "paddingTop": 10,
  "shadow": true,
  "top": "30.5%",
  "visible": false,
  "minHeight": 1,
  "id": "HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:75px;font-family:'GrindAndDeath_Demo';\"><B>Horror in Annenkirche</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "data": {
   "name": "T\u00edtulo"
  },
  "borderSize": 3,
  "paddingLeft": 10,
  "shadowColor": "#FFFFFF",
  "class": "HTMLText",
  "shadowBlurRadius": 6,
  "minWidth": 1,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "shadowHorizontalLength": 3,
  "right": "6.42%"
 },
 {
  "backgroundOpacity": 0,
  "paddingRight": 0,
  "textShadowColor": "#CCCCCC",
  "borderRadius": 0,
  "paddingBottom": 0,
  "fontSize": 22,
  "verticalAlign": "middle",
  "textShadowBlurRadius": 3,
  "rollOver": "this.setComponentVisibility(this.Label_5BB62D95_497E_3D82_41CA_ED3237F26477, true, 0, this.effect_5ECE4DD9_4992_FD82_4197_C5FD6F74E5A1, 'showEffect', false)",
  "textShadowOpacity": 0.7,
  "fontColor": "#000000",
  "textDecoration": "none",
  "fontFamily": "Redsniper Classic",
  "paddingTop": 0,
  "width": "31.856%",
  "text": "CHOOSE YOUR DESTINY",
  "shadow": false,
  "height": "14.113%",
  "fontStyle": "normal",
  "fontWeight": "normal",
  "horizontalAlign": "center",
  "bottom": "37.85%",
  "click": "this.setComponentVisibility(this.HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47, false, 0, this.effect_51BD5670_4992_4E82_41A0_BE9B07ACCE4F, 'hideEffect', false); this.setComponentVisibility(this.Label_5BB62D95_497E_3D82_41CA_ED3237F26477, false, 0, this.effect_51BD5670_4992_4E82_41A0_BE9B07ACCE4F, 'hideEffect', false)",
  "minHeight": 1,
  "visible": false,
  "id": "Label_5BB62D95_497E_3D82_41CA_ED3237F26477",
  "data": {
   "name": "Label4564"
  },
  "borderSize": 0,
  "paddingLeft": 0,
  "class": "Label",
  "textShadowHorizontalLength": 1,
  "minWidth": 1,
  "propagateClick": false,
  "textShadowVerticalLength": 1,
  "right": "33.31%"
 },
 {
  "backgroundOpacity": 0.55,
  "paddingRight": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingBottom": 0,
  "paddingTop": 0,
  "shadow": false,
  "backgroundColorDirection": "vertical",
  "top": 0,
  "bottom": 0,
  "minHeight": 0,
  "visible": false,
  "id": "veilPopupPanorama",
  "backgroundColorRatios": [
   0
  ],
  "data": {
   "name": "UIComponent4577"
  },
  "borderSize": 0,
  "class": "UIComponent",
  "propagateClick": false,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "minWidth": 0,
  "left": 0,
  "right": 0
 },
 {
  "backgroundOpacity": 1,
  "paddingRight": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "backgroundColor": [],
  "paddingBottom": 0,
  "paddingTop": 0,
  "shadow": false,
  "scaleMode": "custom",
  "backgroundColorDirection": "vertical",
  "top": 0,
  "bottom": 0,
  "minHeight": 0,
  "visible": false,
  "id": "zoomImagePopupPanorama",
  "backgroundColorRatios": [],
  "data": {
   "name": "ZoomImage4578"
  },
  "borderSize": 0,
  "class": "ZoomImage",
  "propagateClick": false,
  "minWidth": 0,
  "left": 0,
  "right": 0
 },
 {
  "label": "",
  "backgroundOpacity": 0.3,
  "shadowSpread": 1,
  "paddingRight": 5,
  "paddingLeft": 5,
  "iconLineWidth": 5,
  "borderRadius": 0,
  "mode": "push",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingBottom": 5,
  "iconColor": "#000000",
  "fontColor": "#FFFFFF",
  "verticalAlign": "middle",
  "iconHeight": 20,
  "rollOverIconColor": "#666666",
  "fontSize": 12,
  "fontFamily": "Arial",
  "layout": "horizontal",
  "paddingTop": 5,
  "textDecoration": "none",
  "gap": 5,
  "shadow": false,
  "fontStyle": "normal",
  "iconWidth": 20,
  "iconBeforeLabel": true,
  "backgroundColorDirection": "vertical",
  "top": 10,
  "fontWeight": "normal",
  "cursor": "hand",
  "visible": false,
  "horizontalAlign": "center",
  "minHeight": 0,
  "id": "closeButtonPopupPanorama",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "data": {
   "name": "CloseButton4579"
  },
  "borderSize": 0,
  "class": "CloseButton",
  "propagateClick": false,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "shadowBlurRadius": 6,
  "minWidth": 0,
  "borderColor": "#000000",
  "shadowColor": "#000000",
  "pressedIconColor": "#888888",
  "right": 10
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "mobileMipmappingEnabled": true,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "vrPolyfillScale": 1,
 "buttonToggleFullscreen": "this.IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C",
 "height": "100%",
 "scrollBarMargin": 2,
 "width": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "creationPolicy": "delayed",
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "gap": 10,
 "shadow": false,
 "overflow": "visible",
 "horizontalAlign": "left",
 "contentOpaque": false,
 "desktopMipmappingEnabled": true,
 "minHeight": 20,
 "id": "rootPlayer",
 "data": {
  "name": "Player536"
 },
 "borderSize": 0,
 "class": "Player",
 "propagateClick": false,
 "minWidth": 20,
 "scrollBarWidth": 10,
 "backgroundPreloadEnabled": true,
 "scripts": {
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "existsKey": function(key){  return key in window; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getKey": function(key){  return window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } }
 }
})