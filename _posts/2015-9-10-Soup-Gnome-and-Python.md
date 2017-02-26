---
layout: post
title: Soup, Gnome and Python.
---

Em? Pois é... Na verdade irei mostrar como fazer uma busca no google e exibir a descrição do primeiro resultado, isso de maneira simples utilizando **urllib.request** e **BeautifulSoup 4** com Python 3.

## Instalando BeautifulSoup 4 ##
Se você utiliza versões recentes do Debian ou Ubuntu Linux (Linux? Haha... Tá, parei.) pode simplesmente utilizar o commendo a seguir.
`$ apt-get install python-bs4`

Ou você pode instalar com `easy_install` ou `pip` como no meu caso (Fedora 22).
`$ pip install beautifulsoup4`

Ainda pode [baixar o código do BeautifulSoup 4](http://www.crummy.com/software/BeautifulSoup/download/4.x/) e intalar o "setup.py"
`$ python setup.py install`

> Caso esteja com problemas na instalação, tente utilizando `$ python3 setup.py install` para o Python 3.

## O código ##
Primeiramente vamos importar o **urllib.request** e o **BeautifulSoup**
{% highlight py %}
import urllib.request
from bs4 import BeautifulSoup
{% endhighlight %}

Ok, agora para podermos fazer uma requisição na pagina do google precisamos adicionar um _User-Agent_ no nosso header.
{% highlight py %}
opener = urllib.request.build_opener()
opener.addheaders = [('User-agent', 'Mozilla/5.0')]
{% endhighlight %}

Vamos criar uma função responsavel por buscar e mostrar o resultado,
{% highlight py %}
def search(query):
    result = opener.open('http://google.com/search?q=' + query).read()
    soup = BeautifulSoup(result, 'lxml')
    text = soup.find_all(class_='st')[0].text
    print(text)
{% endhighlight %}

Para finalizar vamos pegar a frase e chamar a função de busca.
{% highlight py %}
qry = input('Busca: ')
search(qry)
{% endhighlight %}
