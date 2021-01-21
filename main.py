while True:
    print("sound_level:" + input.sound_level() + "light_level :" + input.light_level())
    if input.sound_level() <= 69 and input.light_level() <= 5:
        music.set_volume(100)
        music.ba_ding.play_until_done()
        light.set_all(color.rgb(0, 0, 255))
        pause(1000)
        light.clear()
        pause(1000)
    elif input.sound_level(): 
        music.stop_all_sounds()
        light.clear()
        
