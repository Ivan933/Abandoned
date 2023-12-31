TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD",
  "thumbnailUrl": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_t.jpg",
  "hfovMax": 134,
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "vfov": 26.38,
      "video": {
       "height": 480,
       "class": "VideoResource",
       "mp4Url": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313.mp4",
       "width": 854
      },
      "enabledInCardboard": true,
      "hfov": 31.49,
      "id": "overlay_C5ACBA36_CA04_401B_41D0_CC3DFF353F5C",
      "autoplay": true,
      "chromaColor": "#28C034",
      "rotationX": 6.05,
      "chromaThreshold": 0.24,
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
      "loop": true,
      "pitch": -8.36,
      "data": {
       "label": "Video"
      },
      "yaw": 82.05,
      "roll": -2.59,
      "useHandCursor": true,
      "class": "VideoPanoramaOverlay",
      "blending": 0.08,
      "chromaSmoothing": 0.1,
      "videoVisibleOnStop": false
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45.6,
      "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_tcap0",
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
      "inertia": false,
      "angle": 0
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_4488E140_4A70_EF6A_4183_1301795CB82C",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 55.01,
        "yaw": 74.99,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 194,
           "class": "ImageResourceLevel",
           "width": 200,
           "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_0_HS_5_1_0_map.gif"
          }
         ]
        },
        "pitch": 30.97
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_5A65D056_4A70_ED16_41A0_FC863A38AC38",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 42.75,
        "yaw": -70.01,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 190,
           "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_0_HS_6_1_0_map.gif"
          }
         ]
        },
        "pitch": 36.63
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_t.jpg",
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
    }
   }
  ],
  "cardboardMenu": {
   "children": [
    {
     "class": "MenuItem",
     "label": "5.00_00_27_10.Imagen fija002",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_C0895001_0895_360_190926080439_360_equi_equi",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "5.00_00_00_00.Imagen fija001",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "2.00_00_13_18.Imagen fija003",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "6.MP4_snapshot_00.16_[2022.11.05_19.03.45]4EMB-very_compressed-scale-1_00x",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    }
   ],
   "fontFamily": "Arial",
   "opacity": 0.4,
   "label": "Media",
   "backgroundColor": "#404040",
   "selectedFontColor": "#FFFFFF",
   "class": "Menu",
   "rollOverBackgroundColor": "#000000",
   "rollOverOpacity": 0.8,
   "id": "Menu_FCDA1BA2_F239_C9F3_41DD_A9A0200949BE",
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020"
  },
  "label": "5.00_00_27_10.Imagen fija002",
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
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "buttonCardboardView": "this.IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 129,
   "yaw": 1.63,
   "pitch": 9.95
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "vfov": 180,
  "thumbnailUrl": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_t.jpg",
  "id": "panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A",
  "hfov": 360,
  "hfovMax": 133,
  "partial": false,
  "pitch": 0,
  "frames": [
   {
    "overlays": [
     {
      "vfov": 9.91,
      "video": {
       "height": 360,
       "class": "VideoResource",
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4",
       "width": 640
      },
      "enabledInCardboard": true,
      "hfov": 13.43,
      "id": "overlay_C769E505_C9EA_BC1B_41C5_DFDFB9E1427F",
      "autoplay": true,
      "chromaColor": "#28C034",
      "rotationX": 1.53,
      "chromaThreshold": 0.09,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 360,
         "class": "ImageResourceLevel",
         "width": 640,
         "url": "media/overlay_C769E505_C9EA_BC1B_41C5_DFDFB9E1427F_t.png"
        }
       ]
      },
      "rotationY": -28.65,
      "loop": false,
      "pitch": -1.27,
      "data": {
       "label": "Video"
      },
      "yaw": 57.98,
      "roll": -4.03,
      "useHandCursor": true,
      "class": "VideoPanoramaOverlay",
      "blending": 0,
      "chromaSmoothing": 0.46,
      "videoVisibleOnStop": false
     },
     {
      "vfov": 33.31,
      "video": {
       "height": 360,
       "class": "VideoResource",
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4",
       "width": 640
      },
      "enabledInCardboard": true,
      "hfov": 18.88,
      "id": "overlay_DB9B7068_CA67_E6BE_41C8_1A09D8B026FC",
      "autoplay": false,
      "chromaColor": "#28C034",
      "rotationX": 8.05,
      "chromaThreshold": 0.22,
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
      "loop": false,
      "pitch": -7.57,
      "data": {
       "label": "Video"
      },
      "yaw": -164.61,
      "roll": 2.67,
      "useHandCursor": true,
      "class": "VideoPanoramaOverlay",
      "click": "this.overlay_DB9B7068_CA67_E6BE_41C8_1A09D8B026FC.play()",
      "blending": 0,
      "chromaSmoothing": 0,
      "videoVisibleOnStop": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_5BD221A9_4A70_2F3B_417E_28D1D33151AF",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 30.73,
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
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E, this.camera_FCC32BBA_F239_C9D0_41B9_B673DAE4452B); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_596710E9_4A90_2D3A_41C8_31F8E5DCEB1F",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 50.7,
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
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_FF693958_F239_495F_41E5_9CBEA4C6AE3C",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 23.64,
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
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_t.jpg",
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
    }
   }
  ],
  "cardboardMenu": "this.Menu_FCDA1BA2_F239_C9F3_41DD_A9A0200949BE",
  "label": "YIVR_Stitch_C0895001_0895_360_190926080439_360_equi_equi",
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
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -101.07,
    "yaw": -97.46,
    "panorama": {
     "vfov": 180,
     "thumbnailUrl": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_t.jpg",
     "id": "panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E",
     "hfov": 360,
     "hfovMax": 140,
     "partial": false,
     "pitch": 0,
     "frames": [
      {
       "overlays": [
        {
         "class": "TripodCapPanoramaOverlay",
         "hfov": 45.6,
         "id": "panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_tcap0",
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
         "inertia": false,
         "angle": 0
        },
        {
         "vfov": 3.03,
         "video": {
          "height": 720,
          "class": "VideoResource",
          "mp4Url": "media/video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6.mp4",
          "width": 1280
         },
         "enabledInCardboard": true,
         "hfov": 9.87,
         "id": "overlay_FCEBAF96_EDCD_8156_41DC_C51DAD990272",
         "autoplay": true,
         "chromaColor": "#28C034",
         "rotationX": -8.44,
         "chromaThreshold": 0.22,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "height": 2,
            "class": "ImageResourceLevel",
            "width": 2,
            "url": "media/overlay_FCEBAF96_EDCD_8156_41DC_C51DAD990272_t.png"
           }
          ]
         },
         "rotationY": -56.9,
         "loop": true,
         "pitch": 1.52,
         "data": {
          "label": "Video"
         },
         "yaw": 142.66,
         "roll": -0.28,
         "useHandCursor": true,
         "class": "VideoPanoramaOverlay",
         "click": "this.overlay_FCEBAF96_EDCD_8156_41DC_C51DAD990272.stop()",
         "blending": 0.94,
         "chromaSmoothing": 0.11,
         "videoVisibleOnStop": true
        },
        {
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "id": "overlay_F86FD138_EDCD_8159_41E2_9EB3FCB3B587",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 43.78,
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
         "useHandCursor": true,
         "data": {
          "label": "Polygon"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265)"
          }
         ],
         "rollOverDisplay": false
        },
        {
         "vfov": 52.48,
         "video": {
          "height": 1280,
          "class": "VideoResource",
          "mp4Url": "media/video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB.mp4",
          "width": 720
         },
         "enabledInCardboard": true,
         "hfov": 23.51,
         "id": "overlay_5CFDAA7C_499D_C682_41CC_71AC29719C8F",
         "autoplay": false,
         "chromaColor": "#28C034",
         "rotationX": 3.96,
         "chromaThreshold": 0.28,
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
         "loop": true,
         "pitch": -9.06,
         "data": {
          "label": "Video"
         },
         "yaw": 50.6,
         "roll": -1.16,
         "useHandCursor": true,
         "class": "VideoPanoramaOverlay",
         "click": "this.overlay_5CFDAA7C_499D_C682_41CC_71AC29719C8F.play()",
         "blending": 0.26,
         "chromaSmoothing": 0.03,
         "videoVisibleOnStop": true
        },
        {
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "id": "overlay_5871DA47_4A90_7D76_41C0_057CFAEE46B7",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 76.88,
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
         "useHandCursor": true,
         "data": {
          "label": "Polygon"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A, this.camera_FCCEEBCC_F239_C9B7_41D9_4433E1EC27B9); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "rollOverDisplay": false
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_t.jpg",
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
       }
      }
     ],
     "cardboardMenu": "this.Menu_FCDA1BA2_F239_C9F3_41DD_A9A0200949BE",
     "label": "2.00_00_13_18.Imagen fija003",
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
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -97.46,
       "yaw": -101.07,
       "panorama": "this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A",
       "distance": 1
      }
     ],
     "class": "Panorama",
     "hfovMin": 60
    },
    "distance": 1
   }
  ],
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 129,
   "yaw": 31.13,
   "pitch": -15.45
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "vfov": 180,
  "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43",
  "thumbnailUrl": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_t.jpg",
  "hfovMax": 130,
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "vfov": 48.94,
      "video": {
       "height": 360,
       "class": "VideoResource",
       "mp4Url": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB.mp4",
       "width": 640
      },
      "enabledInCardboard": true,
      "hfov": 23.08,
      "id": "overlay_C1DF9AA0_CA27_BBAE_41E8_5775E3BF675F",
      "autoplay": true,
      "chromaColor": "#28C034",
      "rotationX": 31.76,
      "chromaThreshold": 0.31,
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
      "loop": true,
      "pitch": -26.98,
      "data": {
       "label": "Video"
      },
      "yaw": 10.52,
      "roll": -14.8,
      "useHandCursor": true,
      "class": "VideoPanoramaOverlay",
      "blending": 0.07,
      "chromaSmoothing": 0.78,
      "videoVisibleOnStop": false
     },
     {
      "vfov": 14.55,
      "video": {
       "height": 720,
       "class": "VideoResource",
       "mp4Url": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E.mp4",
       "width": 1280
      },
      "enabledInCardboard": true,
      "hfov": 12.07,
      "id": "overlay_D82771DC_CA2A_A996_41D2_045CE5C504DE",
      "autoplay": true,
      "chromaColor": "#28C034",
      "rotationX": 5.23,
      "chromaThreshold": 0.14,
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
      "loop": true,
      "pitch": 5.18,
      "data": {
       "label": "Video"
      },
      "yaw": -40.31,
      "roll": 0.64,
      "useHandCursor": true,
      "class": "VideoPanoramaOverlay",
      "blending": 0,
      "chromaSmoothing": 0.06,
      "videoVisibleOnStop": false
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45.6,
      "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_tcap0",
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
      "inertia": false,
      "angle": 0
     },
     {
      "vfov": 38.22,
      "video": {
       "height": 360,
       "class": "VideoResource",
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4",
       "width": 640
      },
      "enabledInCardboard": true,
      "hfov": 24.23,
      "id": "overlay_107D7FD3_1E32_BE64_4171_11A206EF3984",
      "autoplay": false,
      "chromaColor": "#28C034",
      "rotationX": 12.43,
      "chromaThreshold": 0.24,
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
      "loop": false,
      "pitch": -14.63,
      "data": {
       "label": "Video"
      },
      "yaw": 127.72,
      "roll": -4.59,
      "useHandCursor": true,
      "class": "VideoPanoramaOverlay",
      "click": "this.overlay_107D7FD3_1E32_BE64_4171_11A206EF3984.play()",
      "blending": 0,
      "chromaSmoothing": 0,
      "videoVisibleOnStop": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_5B04C75A_4A70_D319_41BE_BEBD6317C3FB",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.57,
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
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_t.jpg",
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
    }
   }
  ],
  "cardboardMenu": "this.Menu_FCDA1BA2_F239_C9F3_41DD_A9A0200949BE",
  "label": "5.00_00_00_00.Imagen fija001",
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
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 133.98,
   "pitch": -8.85
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 10.61,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 10.61,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 10.61,
     "yawDelta": -18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 135,
   "yaw": -177.38,
   "pitch": -3.98
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_FF66E78E_EDDC_8136_41EA_4F751DDC3DAE"
  }
 },
 {
  "vfov": 180,
  "id": "panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF",
  "thumbnailUrl": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_t.jpg",
  "hfovMax": 142,
  "partial": false,
  "pitch": 0,
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "vfov": 74.36,
      "video": {
       "height": 360,
       "class": "VideoResource",
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4",
       "width": 640
      },
      "enabledInCardboard": true,
      "hfov": 38.75,
      "id": "overlay_51EB61E8_499E_C582_41B6_3662F2DDE86A",
      "autoplay": false,
      "chromaColor": "#28C034",
      "rotationX": 27.78,
      "chromaThreshold": 0.19,
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
      "loop": false,
      "pitch": -30.73,
      "data": {
       "label": "Video"
      },
      "yaw": -78.35,
      "roll": 6.14,
      "useHandCursor": true,
      "class": "VideoPanoramaOverlay",
      "click": "this.overlay_51EB61E8_499E_C582_41B6_3662F2DDE86A.play()",
      "blending": 0,
      "chromaSmoothing": 0.06,
      "videoVisibleOnStop": false
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45.6,
      "id": "panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_tcap0",
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
      "inertia": false,
      "angle": 0
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_5B4CE40A_4A70_74FE_41C1_95BC8C081B22",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 35.3,
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
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_t.jpg",
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
    }
   }
  ],
  "cardboardMenu": "this.Menu_FCDA1BA2_F239_C9F3_41DD_A9A0200949BE",
  "label": "6.MP4_snapshot_00.16_[2022.11.05_19.03.45]4EMB-very_compressed-scale-1_00x",
  "class": "Panorama",
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 135,
   "yaw": 93.37,
   "pitch": -1.67
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "label": "4",
  "video": {
   "height": 680,
   "class": "VideoResource",
   "mp4Url": "media/video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82.mp4",
   "width": 1358
  },
  "class": "Video",
  "thumbnailUrl": "media/video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82_t.jpg",
  "width": 3168,
  "id": "video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82",
  "loop": false,
  "height": 1584,
  "scaleMode": "fit_inside"
 },
 {
  "displayPlaybackBar": true,
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer"
 },
 {
  "class": "PlayList",
  "id": "playList_FCDFFB99_F239_C9D1_41D0_6399D6DF22F7",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_FCDFFB99_F239_C9D1_41D0_6399D6DF22F7, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FCDFFB99_F239_C9D1_41D0_6399D6DF22F7, 0, this.video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82)"
   }
  ]
 },
 {
  "label": "videoplayback",
  "video": {
   "height": 360,
   "class": "VideoResource",
   "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4",
   "width": 640
  },
  "class": "Video",
  "thumbnailUrl": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E_t.jpg",
  "width": 640,
  "id": "video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E",
  "loop": false,
  "height": 360,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_FCDFEB99_F239_C9D1_41DE_2F55B4B1CC7D",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_FCDFEB99_F239_C9D1_41DE_2F55B4B1CC7D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FCDFEB99_F239_C9D1_41DE_2F55B4B1CC7D, 0, this.video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E)"
   }
  ]
 },
 {
  "label": "Untitled Project",
  "video": {
   "height": 480,
   "class": "VideoResource",
   "mp4Url": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313.mp4",
   "width": 854
  },
  "class": "Video",
  "thumbnailUrl": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313_t.jpg",
  "width": 854,
  "id": "video_C4225EF6_CA0B_C018_41B7_D6667882B313",
  "loop": false,
  "height": 480,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_FCDFDB99_F239_C9D1_41D0_3C47938BEC9D",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_C4225EF6_CA0B_C018_41B7_D6667882B313",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_FCDFDB99_F239_C9D1_41D0_3C47938BEC9D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FCDFDB99_F239_C9D1_41D0_3C47938BEC9D, 0, this.video_C4225EF6_CA0B_C018_41B7_D6667882B313)"
   }
  ]
 },
 {
  "label": "videoplayback (3)",
  "video": {
   "height": 360,
   "class": "VideoResource",
   "mp4Url": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB.mp4",
   "width": 640
  },
  "class": "Video",
  "thumbnailUrl": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB_t.jpg",
  "width": 640,
  "id": "video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB",
  "loop": false,
  "height": 360,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_FCDFCB99_F239_C9D1_41C7_C6224949AD3E",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_FCDFCB99_F239_C9D1_41C7_C6224949AD3E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FCDFCB99_F239_C9D1_41C7_C6224949AD3E, 0, this.video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB)"
   }
  ]
 },
 {
  "label": "1",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "mp4Url": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E.mp4",
   "width": 1280
  },
  "class": "Video",
  "thumbnailUrl": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E_t.jpg",
  "width": 1280,
  "id": "video_D98E3897_CA2A_A792_41CB_D4AAA103F65E",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_FCDFBB99_F239_C9D1_41EB_EAF6530A48A9",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_D98E3897_CA2A_A792_41CB_D4AAA103F65E",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_FCDFBB99_F239_C9D1_41EB_EAF6530A48A9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FCDFBB99_F239_C9D1_41EB_EAF6530A48A9, 0, this.video_D98E3897_CA2A_A792_41CB_D4AAA103F65E)"
   }
  ]
 },
 {
  "label": "videoplayback (2)",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "mp4Url": "media/video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6.mp4",
   "width": 1280
  },
  "class": "Video",
  "thumbnailUrl": "media/video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6_t.jpg",
  "width": 1280,
  "id": "video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_FCDFAB99_F239_C9D1_41D2_5A5A0719DDDC",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_FCDFAB99_F239_C9D1_41D2_5A5A0719DDDC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FCDFAB99_F239_C9D1_41D2_5A5A0719DDDC, 0, this.video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6)"
   }
  ]
 },
 {
  "label": "videoplayback (5)",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "mp4Url": "media/video_F856A78F_EDB3_8137_41E4_D12E3F83119F.mp4",
   "width": 1280
  },
  "class": "Video",
  "thumbnailUrl": "media/video_F856A78F_EDB3_8137_41E4_D12E3F83119F_t.jpg",
  "width": 1280,
  "id": "video_F856A78F_EDB3_8137_41E4_D12E3F83119F",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_FCDF9B99_F239_C9D1_41E1_E8A7FCDB323F",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F856A78F_EDB3_8137_41E4_D12E3F83119F",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_FCDF9B99_F239_C9D1_41E1_E8A7FCDB323F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FCDF9B99_F239_C9D1_41E1_E8A7FCDB323F, 0, this.video_F856A78F_EDB3_8137_41E4_D12E3F83119F)"
   }
  ]
 },
 {
  "label": "Manos",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "mp4Url": "media/video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE.mp4",
   "width": 1280
  },
  "class": "Video",
  "thumbnailUrl": "media/video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE_t.jpg",
  "width": 1280,
  "id": "video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_FCDE7B99_F239_C9D1_41D4_532FF4DAE583",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_FCDE7B99_F239_C9D1_41D4_532FF4DAE583, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FCDE7B99_F239_C9D1_41D4_532FF4DAE583, 0, this.video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE)"
   }
  ]
 },
 {
  "label": "mano 2",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "mp4Url": "media/video_5E693D5C_49B2_4282_41D2_4434DC45E897.mp4",
   "width": 1280
  },
  "class": "Video",
  "thumbnailUrl": "media/video_5E693D5C_49B2_4282_41D2_4434DC45E897_t.jpg",
  "width": 1280,
  "id": "video_5E693D5C_49B2_4282_41D2_4434DC45E897",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_FCDE6B99_F239_C9D1_41EC_473E61B9AADC",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_5E693D5C_49B2_4282_41D2_4434DC45E897",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_FCDE6B99_F239_C9D1_41EC_473E61B9AADC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FCDE6B99_F239_C9D1_41EC_473E61B9AADC, 0, this.video_5E693D5C_49B2_4282_41D2_4434DC45E897)"
   }
  ]
 },
 {
  "label": "manos 3",
  "video": {
   "height": 1280,
   "class": "VideoResource",
   "mp4Url": "media/video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB.mp4",
   "width": 720
  },
  "class": "Video",
  "thumbnailUrl": "media/video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB_t.jpg",
  "width": 720,
  "id": "video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB",
  "loop": false,
  "height": 1280,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_FCDE5B99_F239_C9D1_41DC_EB24320588B3",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_FCDE5B99_F239_C9D1_41DC_EB24320588B3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FCDE5B99_F239_C9D1_41DC_EB24320588B3, 0, this.video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB)"
   }
  ]
 },
 "this.Menu_FCDA1BA2_F239_C9F3_41DD_A9A0200949BE",
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_56FB6E17_49B2_3E8E_41CF_6E6977823125",
  "duration": 3000
 },
 {
  "class": "FadeInEffect",
  "easing": "quad_in",
  "id": "effect_5115228D_49B2_479D_41C5_A5B943A758AD",
  "duration": 500
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_51BD5670_4992_4E82_41A0_BE9B07ACCE4F",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "quad_in",
  "id": "effect_5ECE4DD9_4992_FD82_4197_C5FD6F74E5A1",
  "duration": 1000
 },
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_FCC32BBA_F239_C9D0_41B9_B673DAE4452B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 135,
   "yaw": 78.93,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": -18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_FCC31BBA_F239_C9D0_41DA_66C8BAB1D897"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_FCCEEBCC_F239_C9B7_41D9_4433E1EC27B9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 129,
   "yaw": 82.54,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9",
 "this.audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F",
 "this.audio_DF46CC02_CA2F_9E6D_41E4_11C404230921",
 "this.audio_F948C705_EDCD_812B_4196_200730E06FB8"
], "children": [
 {
  "progressRight": 0,
  "propagateClick": false,
  "progressOpacity": 1,
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "toolTipPaddingBottom": 4,
  "shadow": false,
  "toolTipTextShadowOpacity": 0,
  "borderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBorderSize": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBackgroundOpacity": 1,
  "paddingRight": 0,
  "playbackBarOpacity": 1,
  "playbackBarBorderRadius": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBottom": 0,
  "progressBarOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "playbackBarProgressBorderColor": "#000000",
  "progressHeight": 10,
  "toolTipPaddingTop": 4,
  "playbackBarHeadWidth": 6,
  "playbackBarHeight": 10,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "progressBorderRadius": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipOpacity": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "minHeight": 50,
  "borderSize": 0,
  "transitionDuration": 500,
  "height": "100%",
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "minWidth": 100,
  "progressLeft": 0,
  "toolTipShadowSpread": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarLeft": 0,
  "progressBarBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarRight": 0,
  "paddingBottom": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBorderSize": 0,
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "width": "100%",
  "id": "MainViewer",
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 6,
  "playbackBarBackgroundOpacity": 1,
  "toolTipDisplayTime": 600,
  "playbackBarHeadHeight": 15,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowOpacity": 1,
  "transitionMode": "blending",
  "playbackBarHeadBorderRadius": 0,
  "toolTipFontSize": 12,
  "class": "ViewerArea",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "toolTipFontColor": "#606060",
  "toolTipPaddingRight": 6,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontFamily": "Arial"
 },
 {
  "iconURL": "skin/IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5.png",
  "borderSize": 0,
  "paddingTop": 0,
  "width": 70,
  "shadow": false,
  "height": 70,
  "mode": "push",
  "minHeight": 1,
  "borderRadius": 0,
  "minWidth": 1,
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "cursor": "hand",
  "bottom": "5.11%",
  "id": "IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5",
  "data": {
   "name": "IconButton12329"
  },
  "maxWidth": 70,
  "maxHeight": 70,
  "class": "IconButton",
  "horizontalAlign": "center",
  "right": "1.1%",
  "propagateClick": false,
  "transparencyActive": false
 },
 {
  "iconURL": "skin/IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C.png",
  "borderSize": 0,
  "paddingTop": 0,
  "width": 56,
  "toolTipPaddingBottom": 4,
  "shadow": false,
  "height": 34,
  "mode": "toggle",
  "minHeight": 1,
  "borderRadius": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowHorizontalLength": 0,
  "minWidth": 1,
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "toolTipBorderRadius": 3,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowBlurRadius": 3,
  "paddingBottom": 0,
  "paddingRight": 0,
  "toolTip": "Fullscreen",
  "verticalAlign": "middle",
  "cursor": "hand",
  "toolTipBorderSize": 1,
  "top": "3.15%",
  "id": "IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C",
  "toolTipShadowVerticalLength": 0,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "data": {
   "name": "IconButton1493"
  },
  "maxWidth": 128,
  "toolTipDisplayTime": 600,
  "horizontalAlign": "center",
  "toolTipPaddingTop": 4,
  "toolTipOpacity": 1,
  "maxHeight": 128,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipFontColor": "#606060",
  "toolTipShadowOpacity": 1,
  "class": "IconButton",
  "toolTipPaddingRight": 6,
  "right": "1.1%",
  "toolTipFontFamily": "Arial",
  "toolTipBorderColor": "#767676",
  "propagateClick": false,
  "transparencyActive": true
 },
 {
  "scrollBarVisible": "rollOver",
  "minHeight": 1,
  "borderSize": 3,
  "shadowSpread": 1,
  "height": "30.242%",
  "paddingTop": 10,
  "borderRadius": 0,
  "shadowBlurRadius": 6,
  "shadow": true,
  "minWidth": 1,
  "paddingLeft": 10,
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "rollOver": "this.setComponentVisibility(this.HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47, true, 0, this.effect_5115228D_49B2_479D_41C5_A5B943A758AD, 'showEffect', false); this.setComponentVisibility(this.HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47, false, 0, this.effect_56FB6E17_49B2_3E8E_41CF_6E6977823125, 'hideEffect', false)",
  "width": "81.322%",
  "shadowVerticalLength": 0,
  "shadowHorizontalLength": 3,
  "paddingBottom": 10,
  "paddingRight": 10,
  "top": "30.5%",
  "borderColor": "#000000",
  "visible": false,
  "shadowOpacity": 0,
  "scrollBarColor": "#000000",
  "scrollBarMargin": 2,
  "data": {
   "name": "T\u00edtulo"
  },
  "shadowColor": "#FFFFFF",
  "id": "HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47",
  "class": "HTMLText",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:75px;font-family:'GrindAndDeath_Demo';\"><B>Horror in Annenkirche</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "right": "6.42%",
  "propagateClick": false,
  "scrollBarOpacity": 0.5
 },
 {
  "fontColor": "#000000",
  "textShadowHorizontalLength": 1,
  "minHeight": 1,
  "fontSize": 22,
  "borderSize": 0,
  "shadow": false,
  "textDecoration": "none",
  "paddingTop": 0,
  "borderRadius": 0,
  "rollOver": "this.setComponentVisibility(this.Label_5BB62D95_497E_3D82_41CA_ED3237F26477, true, 0, this.effect_5ECE4DD9_4992_FD82_4197_C5FD6F74E5A1, 'showEffect', false)",
  "height": "14.113%",
  "textShadowBlurRadius": 3,
  "minWidth": 1,
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "text": "CHOOSE YOUR DESTINY",
  "fontFamily": "Redsniper Classic",
  "width": "31.856%",
  "paddingBottom": 0,
  "click": "this.setComponentVisibility(this.HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47, false, 0, this.effect_51BD5670_4992_4E82_41A0_BE9B07ACCE4F, 'hideEffect', false); this.setComponentVisibility(this.Label_5BB62D95_497E_3D82_41CA_ED3237F26477, false, 0, this.effect_51BD5670_4992_4E82_41A0_BE9B07ACCE4F, 'hideEffect', false)",
  "fontWeight": "normal",
  "paddingRight": 0,
  "verticalAlign": "middle",
  "bottom": "37.85%",
  "textShadowVerticalLength": 1,
  "id": "Label_5BB62D95_497E_3D82_41CA_ED3237F26477",
  "visible": false,
  "data": {
   "name": "Label4564"
  },
  "fontStyle": "normal",
  "textShadowOpacity": 0.7,
  "class": "Label",
  "horizontalAlign": "center",
  "right": "33.31%",
  "propagateClick": false,
  "textShadowColor": "#CCCCCC"
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "borderSize": 0,
 "shadow": false,
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "creationPolicy": "delayed",
 "minWidth": 20,
 "buttonToggleFullscreen": "this.IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "paddingBottom": 0,
 "overflow": "visible",
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "vrPolyfillScale": 1,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "data": {
  "name": "Player536"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Player",
 "propagateClick": false,
 "mouseWheelEnabled": true,
 "scripts": {
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getKey": function(key){  return window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; }
 }
})