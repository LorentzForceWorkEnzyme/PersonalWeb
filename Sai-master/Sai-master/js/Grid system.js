Rows must be placed within a .container (fixed-width) or .container-fluid (full-width) for proper alignment and padding.
Use rows to create horizontal groups of columns.
Content should be placed within columns, and only columns may be immediate children of rows.
Predefined grid classes like .row and .col-xs-4 are available for quickly making grid layouts. Less mixins can also be used for more semantic layouts.
Columns create gutters (gaps between column content) via padding. That padding is offset in rows for the first and last column via negative margin on .rows.
The negative margin is why the examples below are outdented. It's so that content within grid columns is lined up with non-grid content.
Grid columns are created by specifying the number of twelve available columns you wish to span. For example, three equal columns would use three .col-xs-4.
If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.
Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, e.g. applying any .col-md-* class to an element will not only affect its styling on medium devices but also on large devices if a .col-lg-* class is not present.

行必须放置在.container（固定宽度）或.container-fluid（全角）范围内才能正确对齐和填充。
使用行来创建水平的列组。
内容应放置在列中，并且只有列可以是行的直接子节点。
义电网类，如.row以及.col-xs-4可用于快速进行网格布局。较少的mixin也可用于更多语义布局。
列创建排水沟（列内容之间的差距）通过padding。第一列和最后一列的填充通过.rows 上的负边界在行中偏移。
负边距是为什么下面的例子是缩进的。它使网格列中的内容与非网格内容排列在一起。
通过指定您希望跨越的十二个可用列的数量来创建网格列。例如，三个相等的列将使用三个.col-xs-4。
如果超过12列放置在一行中，每组额外列将作为一个单位换行到一个新行。
网格类适用于屏幕宽度大于或等于断点大小的设备，并覆盖面向较小设备的网格类。因此，例如，.col-md-*向任何元素应用任何类别不仅会影响其在中型设备上的样式，而且如果.col-lg-*类别不存在，则会影响到大型设备上的样式。

.active	Applies the hover color to a particular row or cell
.success	Indicates a successful or positive action
.info	Indicates a neutral informative change or action
.warning	Indicates a warning that might need attention
.danger	Indicates a dangerous or potentially negative action

:focus{}