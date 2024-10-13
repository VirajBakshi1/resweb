<?php
global $SITE_INFO;


if (!function_exists('git_repos')) {
    /**
     * Find the git branch name. This is useful for making this config file context-adaptive (i.e. dev settings vs production settings).
     *
     * @return ?ID_TEXT Branch name (null: not in git)
     */
    function git_repos()
    {
        $path = dirname(__FILE__).'/.git/HEAD';
        if (!is_file($path)) return '';
        $lines = file($path);
        $parts = explode('/', $lines[0]);
        return trim(end($parts));
    }
}

$SITE_INFO['default_lang'] = 'EN';
$SITE_INFO['forum_type'] = 'cns';
$SITE_INFO['db_type'] = 'mysqli';
$SITE_INFO['domain'] = 'www.coeprobotics.com';
$SITE_INFO['base_url'] = 'http://www.coeprobotics.com/portalbeta';
$SITE_INFO['master_password'] = '$2y$12$SsmWL34EtJjnC8Q7Xqw48ui2Ysohn5Q/HA1k/VszW1ud.9VkL//YK';
$SITE_INFO['self_learning_cache'] = '1';
$SITE_INFO['db_site'] = 'i3458981_conc1';
$SITE_INFO['db_site_host'] = 'localhost';
$SITE_INFO['db_site_user'] = 'coeproboticssql';
$SITE_INFO['db_site_password'] = 'websql@coepRSC16';
$SITE_INFO['table_prefix'] = 'composr_';
$SITE_INFO['user_cookie'] = 'cms_member_id';
$SITE_INFO['pass_cookie'] = 'cms_member_hash';
$SITE_INFO['cookie_domain'] = '';
$SITE_INFO['cookie_path'] = '/';
$SITE_INFO['cookie_days'] = '120';
$SITE_INFO['db_forums'] = 'i3458981_conc1';
$SITE_INFO['db_forums_host'] = 'localhost';
$SITE_INFO['db_forums_user'] = 'coeproboticssql';
$SITE_INFO['db_forums_password'] = 'websql@coepRSC16';
$SITE_INFO['cns_table_prefix'] = 'composr_';
$SITE_INFO['multi_lang_content'] = '0';
$SITE_INFO['session_cookie'] = 'cms_session__36eb71c89d53b5a9a9fb1df0d4dceec1';
