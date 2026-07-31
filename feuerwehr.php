<?php
namespace Grav\Theme;

use Grav\Common\Theme;

/**
 * Feuerwehr theme – compatible with Grav 1.7 and Grav 2.0.
 */
class Feuerwehr extends Theme
{
    public static function getSubscribedEvents(): array
    {
        return [
            'onThemeInitialized' => ['onThemeInitialized', 0],
        ];
    }

    public function onThemeInitialized(): void
    {
        // Theme is Twig/CSS/JS based; no runtime hooks required yet.
    }
}
