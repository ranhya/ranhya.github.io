---
title: Guide to using vpngate.net
draft: false
author: Nasu Rei
date: 2025-08-19
category:
- offtopic
tags:
- guide
---

## Table of Contents


---

VPN Gate is a great resource that not enough people make use of. It’s one of the few free and actually good ways of getting a VPN connection. 

## What is VPN Gate?

> VPN Gate Academic Experiment Project is an online service as an academic research at Graduate School of University of Tsukuba, Japan. The purpose of this research is to expand the knowledge of “Global Distributed Public VPN Relay Servers”
\
— [vpngate.net overview](https://www.vpngate.net/en/about_overview.aspx)

Unlike other VPN providers, most of the servers on vpngate.net are hosted by volunteers around the world. This insures that they cannot all be blocked, and the site itself does not offer a full list of all the servers available, pretty much guaranteeing that governments and companies cannot block traffic from them.

There are many reasons to use a VPN, though in this blog post I just want to detail how you can use vpngate to bypass streaming service country specific licensing and watch any show you want on the streaming service you’ve paid for.

---

## How to use VPN Gate

First of all when you open the site you’ll see a big list of available VPN servers. The country flag on the left, and a bunch of other info on the right. If you do not see a VPN server from the country you want to connect to, you can scroll to the bottom and click the blue button that says “Refresh Servers List.”

Let’s say you want to connect to a Japanese VPN server, as these appear most commonly on the list, first you’ll want to avoid any of the ones that have “By Daiyu Nobori” as these always appear at the top and are most definitely blocked by streaming service providers. Instead look for the ones that say “By [something] owner” as these are hosted by volunteers and are most likely not blocked. 

The next step depends on the device/operating system you’re connecting from.

### Windows

On windows it is easiest to use, as you can go to the website’s [download page](https://www.vpngate.net/en/download.aspx) and follow the instructions to download the SoftEther VPN client with the VPN Gate plugin. You can then browse the server list inside of the SoftEther VPN client and follow the principles above and connect to a VPN server.

### iOS, Android, macOS and Linux

On mobile devices, you must first download the OpenVPN app from your respective AppStore, or download the APK on Android if you feel so inclined. Then you can go to the website, and click on the “OpenVPN Config file” link on the right. It will take you to a page containing various download links. ***I recommend picking the OpenVPN file with the IP address included rather than the DDNS host name one as it is generally more reliable.*** It doesn’t matter which one of the two you pick; you can just pick the top one. You can then go into the OpenVPN app and import the file, and you should connect to the VPN automatically, if it does not work—try a different server until you get one that works.

> 📝 Note:
> On iOS you must share the file to the OpenVPN app from the system files app.

---

If you’re on macOS or Linux the above process is the same. Install the OpenVPN client, import the config file, profit.
