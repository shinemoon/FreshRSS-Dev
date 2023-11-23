<?php

class PicViewerExtension extends Minz_Extension {

    public function init():void {
        Minz_View::appendStyle($this->getFileUrl('magnific-popup/magnific-popup.css', 'css'));
        Minz_View::appendScript($this->getFileUrl('jquerymin.js', 'js'),'','','');       
        Minz_View::appendScript($this->getFileUrl('magnific-popup/jquery.magnific-popup.min.js', 'js'),'','','');       

        Minz_View::appendScript($this->getFileUrl('script.js', 'js'),'','','');       
    }
}
