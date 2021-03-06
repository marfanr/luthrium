<a href="https://github.com/marfanr/dotfiles"><img src="https://images.cooltext.com/5498107.png" width="300px" alt="luthrium" /></a><br/>
![version](https://img.shields.io/badge/Version-not_yet_released-blue) ![alpha](https://img.shields.io/badge/-Alpha-red)  


thanks for visiting this repository, this is a theme for Openbox window manager.<br/>
the reason I use Openbox is that besides being lightweight, it's also easy to customize

<img src="https://github.com/marfanr/dotfiles/blob/main/screenshot/sample1.png?raw=true" align="right" width="400px" style="padding:20px"/>

<img src="https://github.com/marfanr/dotfiles/blob/main/screenshot/sample2.png?raw=true" align="right" width="400px" style="padding:20px"/>

##### This is a list of the setups I use on my desktop now
- **OS** 			: [Artix x86_64](https://artixlinux.org/)
- **WM** 			: [Openbox 3.6.1](http://openbox.org/wiki/Main_Page)
- **Terminal** 			: [Termite v15](https://wiki.archlinux.org/index.php/termite)
- **Shell** 			: [ZSH 5.8](https://wiki.archlinux.org/index.php/zsh)
- **Shortcut Daemon** 		: [SXHKD 0.6.2](https://wiki.archlinux.org/index.php/Sxhkd)
- **Panel** 			: [Tint2 16.7](https://wiki.archlinux.org/index.php/tint2)
- **Compositor** 		: [Picom vgit-a9977](https://wiki.archlinux.org/index.php/Picom)
- **Application Launcher** 	: [Rofi 1.6.1](https://wiki.archlinux.org/index.php/Rofi)
- **Notify Daemon** 		: [Dunst 1.5.0 (2020-07-23)](https://wiki.archlinux.org/index.php/Dunst)
- **File Manager** 		: [Thunar 4.16.2 (Xfce 4.16)](https://wiki.archlinux.org/index.php/thunar)
- **Web Browser** 		: [QuteBrowser v1.14.1](https://wiki.archlinux.org/index.php/Qutebrowser)
- **Walpaper** 			: [By WLOP](https://www.wallpaperflare.com/search?wallpaper=WLOP)

### :corn:  Features
- Build in with OpenVPN manager
- Available Power Menu

# :rice_scene: SETUP 

if you are interested in installing this theme on your desktop please follow the steps below

> I hope you understand very well what the Widow Manager is and how to use it

### prerequisite

> because I use Artix or Arch Linux Distro, so for installation I use Pacman. for other distributions please adjust yourself

- ```bash
  $ sudo pacman -Sy git openbox tint2 nitrogen rofi stow thunar neofetch openvpn termite dunst sxhkd zsh
  ```

- ```bash
  $ yay -S concky-lua 
  ```

- ```bash
  $ sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
  ```

### Installation

> To avoid errors, before starting the installation process, make sure that your home directory doesn't have the following folders yet,
> and make sure you're not using any dotfiles 
>
> - ~/.config/conky
> - ~/.config/neofetch
> - ~/.config dunst
> - ~/.config/sxhkd
> - ~/.config/nitrogen
> - ~/.config/thunar
> - ~/.config/termite
> - ~/.config/picom
> - ~/.themes
> - ~/.scripts

first of all clone this repository
```bash
$ git clone https://github.com/marfanr/dotfiles ~/.dotfiles; cd dotfiles
```


_an automatic installation script is being built, for now, you can install it manually using the GNU stow_

- install 
  ```bash
  $ stow  conky dunst neofetch nitrogen openbox picom sxhkd termite thunar themes scripts  tint2 zsh -t ~
  ```

- uninstall
  ```bash
  $ stow -D conky dunst neofetch nitrogen openbox picom sxhkd termite thunar themes scripts  tint2 zsh -t ~
  ```
 


