---
layout: post
title: Instalando Spotify no Fedora 22.
---

Bem, há algum tempo atrás procurei por um cliente **Spotify** para usar no Fedora, não consegui fazer funcionar (e nem cuidei em arrumar isso -.-), esqueci por uns tempos e lembrei novamente hoje por acaso. Ao procurar novamente encontrei algo que não havia me atentado antes, um [repositório](http://negativo17.org/spotify-client/) lindo, hahaha. Mas vamos deixar de muita conversa e fazer essa parada funcionar!

## O que preciso? ##

Sistema atualizado e os repositórios [RPM Fusion](http://rpmfusion.org/) habilitado.

## O que fazer? ##

Abra o terminal e logue como root (ou utilize nosso amigo **sudo**) e adicione o repositório executando a seguinte linha:
{% highlight sh %}
dnf config-manager --add-repo=http://negativo17.org/repos/fedora-spotify.repo
{% endhighlight %}

E agora para instalar (tambem como root):
{% highlight sh %}
dnf install spotify-client
{% endhighlight %}

## O que mais? ##

Abre a parada aí e bota a cantiga pra rolar seu cabra!
