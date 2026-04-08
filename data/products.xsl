<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>Каталог суккулентов - Flower Lover</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    h1 { color: #4A7C59; }
                    .product { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 8px; }
                    .price { color: #F4A460; font-weight: bold; }
                    .zodiac, .lifestyle { color: #666; font-size: 14px; }
                </style>
            </head>
            <body>
                <h1>Flower Lover - Каталог суккулентов</h1>
                <p>Магазин: <xsl:value-of select="shop/name"/>, <xsl:value-of select="shop/location"/></p>
                
                <h2>Наши суккуленты</h2>
                <xsl:for-each select="shop/products/product">
                    <div class="product">
                        <h3><xsl:value-of select="name"/></h3>
                        <p class="price"><xsl:value-of select="price"/> <xsl:value-of select="currency"/></p>
                        <p><xsl:value-of select="description"/></p>
                        <p class="zodiac">Подходит для знаков зодиака: <xsl:value-of select="suitable_for/zodiac"/></p>
                        <p class="lifestyle">Образ жизни: <xsl:value-of select="suitable_for/lifestyle"/></p>
                        <p>Уход: <xsl:value-of select="care"/></p>
                    </div>
                </xsl:for-each>
                
                <h2>Советы по уходу</h2>
                <xsl:for-each select="shop/care_tips/tip">
                    <div class="product">
                        <h3><xsl:value-of select="title"/></h3>
                        <p><xsl:value-of select="content"/></p>
                    </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>