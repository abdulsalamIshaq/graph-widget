<?php

/**
 * Plugin Name:       Graph
 * Description:       Graph widget plugin
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Abdulsalam Ishaq
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       graph
 */

add_action('admin_enqueue_scripts', 'graph_enqueue_scripts');

/**
 * Enqueue scripts and styles.
 *
 * @return void
 */
function graph_enqueue_scripts()
{
    wp_enqueue_style('graph-style', plugin_dir_url(__FILE__) . 'build/index.css');
    wp_enqueue_script('graph-script', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-element'), '1.0.0', true);
}

// require_once(plugin_dir_path(__FILE__) . '/includes/widgets/graph-widget.php');

// function register_graph()
// {
//     register_widget('Graph_Widget');
// }

// add_action('widgets_init', 'register_graph');


add_action('wp_dashboard_setup', 'graph_dashboard_widgets');

function graph_dashboard_widgets()
{
    wp_add_dashboard_widget('graph_widget', 'Graph Widget', 'dashboard_graph');
}

function dashboard_graph()
{
    echo "<div id='graph'></div>";
}
