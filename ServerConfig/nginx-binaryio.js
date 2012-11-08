# HTTPS server
#

server {
     listen 80;
     server_name localhost binaryoggstreaming.example.com;

     root /home/nodetest/BinaryOggStreaming/www-root;
     index index.html index.htm;

#    ssl on;
#    ssl_certificate /home/nodetest/BinaryOggStreaming/ServerConfig/server.cert;
#    ssl_certificate_key /home/nodetest/BinaryOggStreaming/ServerConfig/server.key;

#    ssl_session_timeout 5m;

#    ssl_protocols SSLv3 TLSv1;
#    ssl_ciphers ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv3:+EXP;
#    ssl_prefer_server_ciphers on;

     location / {
        try_files $uri $uri/ /index.html;
     }
}

