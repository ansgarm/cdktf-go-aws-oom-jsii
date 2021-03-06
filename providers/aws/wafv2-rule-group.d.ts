import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Wafv2RuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#capacity Wafv2RuleGroup#capacity}.
     */
    readonly capacity: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#description Wafv2RuleGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#scope Wafv2RuleGroup#scope}.
     */
    readonly scope: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#tags Wafv2RuleGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#tags_all Wafv2RuleGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#rule Wafv2RuleGroup#rule}
     */
    readonly rule?: Wafv2RuleGroupRule[];
    /**
     * visibility_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#visibility_config Wafv2RuleGroup#visibility_config}
     */
    readonly visibilityConfig: Wafv2RuleGroupVisibilityConfig[];
}
export interface Wafv2RuleGroupRuleActionAllow {
}
export interface Wafv2RuleGroupRuleActionBlock {
}
export interface Wafv2RuleGroupRuleActionCount {
}
export interface Wafv2RuleGroupRuleAction {
    /**
     * allow block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#allow Wafv2RuleGroup#allow}
     */
    readonly allow?: Wafv2RuleGroupRuleActionAllow[];
    /**
     * block block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#block Wafv2RuleGroup#block}
     */
    readonly block?: Wafv2RuleGroupRuleActionBlock[];
    /**
     * count block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#count Wafv2RuleGroup#count}
     */
    readonly count?: Wafv2RuleGroupRuleActionCount[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#positional_constraint Wafv2RuleGroup#positional_constraint}.
     */
    readonly positionalConstraint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#search_string Wafv2RuleGroup#search_string}.
     */
    readonly searchString: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#country_codes Wafv2RuleGroup#country_codes}.
     */
    readonly countryCodes: string[];
    /**
     * forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#forwarded_ip_config Wafv2RuleGroup#forwarded_ip_config}
     */
    readonly forwardedIpConfig?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#position Wafv2RuleGroup#position}.
     */
    readonly position: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * ip_set_forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_forwarded_ip_config Wafv2RuleGroup#ip_set_forwarded_ip_config}
     */
    readonly ipSetForwardedIpConfig?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#comparison_operator Wafv2RuleGroup#comparison_operator}.
     */
    readonly comparisonOperator: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size Wafv2RuleGroup#size}.
     */
    readonly size: number;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatement {
    /**
     * byte_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#byte_match_statement Wafv2RuleGroup#byte_match_statement}
     */
    readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatement[];
    /**
     * geo_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#geo_match_statement Wafv2RuleGroup#geo_match_statement}
     */
    readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatement[];
    /**
     * ip_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_reference_statement Wafv2RuleGroup#ip_set_reference_statement}
     */
    readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement[];
    /**
     * regex_pattern_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#regex_pattern_set_reference_statement Wafv2RuleGroup#regex_pattern_set_reference_statement}
     */
    readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement[];
    /**
     * size_constraint_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size_constraint_statement Wafv2RuleGroup#size_constraint_statement}
     */
    readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatement[];
    /**
     * sqli_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#sqli_match_statement Wafv2RuleGroup#sqli_match_statement}
     */
    readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatement[];
    /**
     * xss_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#xss_match_statement Wafv2RuleGroup#xss_match_statement}
     */
    readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatement[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatement {
    /**
     * statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#statement Wafv2RuleGroup#statement}
     */
    readonly statement: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatement[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#positional_constraint Wafv2RuleGroup#positional_constraint}.
     */
    readonly positionalConstraint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#search_string Wafv2RuleGroup#search_string}.
     */
    readonly searchString: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#country_codes Wafv2RuleGroup#country_codes}.
     */
    readonly countryCodes: string[];
    /**
     * forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#forwarded_ip_config Wafv2RuleGroup#forwarded_ip_config}
     */
    readonly forwardedIpConfig?: Wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatementForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#position Wafv2RuleGroup#position}.
     */
    readonly position: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * ip_set_forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_forwarded_ip_config Wafv2RuleGroup#ip_set_forwarded_ip_config}
     */
    readonly ipSetForwardedIpConfig?: Wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#positional_constraint Wafv2RuleGroup#positional_constraint}.
     */
    readonly positionalConstraint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#search_string Wafv2RuleGroup#search_string}.
     */
    readonly searchString: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#country_codes Wafv2RuleGroup#country_codes}.
     */
    readonly countryCodes: string[];
    /**
     * forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#forwarded_ip_config Wafv2RuleGroup#forwarded_ip_config}
     */
    readonly forwardedIpConfig?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#position Wafv2RuleGroup#position}.
     */
    readonly position: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * ip_set_forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_forwarded_ip_config Wafv2RuleGroup#ip_set_forwarded_ip_config}
     */
    readonly ipSetForwardedIpConfig?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#comparison_operator Wafv2RuleGroup#comparison_operator}.
     */
    readonly comparisonOperator: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size Wafv2RuleGroup#size}.
     */
    readonly size: number;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatement {
    /**
     * byte_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#byte_match_statement Wafv2RuleGroup#byte_match_statement}
     */
    readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatement[];
    /**
     * geo_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#geo_match_statement Wafv2RuleGroup#geo_match_statement}
     */
    readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatement[];
    /**
     * ip_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_reference_statement Wafv2RuleGroup#ip_set_reference_statement}
     */
    readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement[];
    /**
     * regex_pattern_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#regex_pattern_set_reference_statement Wafv2RuleGroup#regex_pattern_set_reference_statement}
     */
    readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement[];
    /**
     * size_constraint_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size_constraint_statement Wafv2RuleGroup#size_constraint_statement}
     */
    readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatement[];
    /**
     * sqli_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#sqli_match_statement Wafv2RuleGroup#sqli_match_statement}
     */
    readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatement[];
    /**
     * xss_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#xss_match_statement Wafv2RuleGroup#xss_match_statement}
     */
    readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatement[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatement {
    /**
     * statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#statement Wafv2RuleGroup#statement}
     */
    readonly statement: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatement[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#positional_constraint Wafv2RuleGroup#positional_constraint}.
     */
    readonly positionalConstraint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#search_string Wafv2RuleGroup#search_string}.
     */
    readonly searchString: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#country_codes Wafv2RuleGroup#country_codes}.
     */
    readonly countryCodes: string[];
    /**
     * forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#forwarded_ip_config Wafv2RuleGroup#forwarded_ip_config}
     */
    readonly forwardedIpConfig?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#position Wafv2RuleGroup#position}.
     */
    readonly position: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * ip_set_forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_forwarded_ip_config Wafv2RuleGroup#ip_set_forwarded_ip_config}
     */
    readonly ipSetForwardedIpConfig?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#comparison_operator Wafv2RuleGroup#comparison_operator}.
     */
    readonly comparisonOperator: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size Wafv2RuleGroup#size}.
     */
    readonly size: number;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatement {
    /**
     * byte_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#byte_match_statement Wafv2RuleGroup#byte_match_statement}
     */
    readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatement[];
    /**
     * geo_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#geo_match_statement Wafv2RuleGroup#geo_match_statement}
     */
    readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatement[];
    /**
     * ip_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_reference_statement Wafv2RuleGroup#ip_set_reference_statement}
     */
    readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement[];
    /**
     * regex_pattern_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#regex_pattern_set_reference_statement Wafv2RuleGroup#regex_pattern_set_reference_statement}
     */
    readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement[];
    /**
     * size_constraint_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size_constraint_statement Wafv2RuleGroup#size_constraint_statement}
     */
    readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatement[];
    /**
     * sqli_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#sqli_match_statement Wafv2RuleGroup#sqli_match_statement}
     */
    readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatement[];
    /**
     * xss_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#xss_match_statement Wafv2RuleGroup#xss_match_statement}
     */
    readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatement[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatement {
    /**
     * statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#statement Wafv2RuleGroup#statement}
     */
    readonly statement: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatement[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#comparison_operator Wafv2RuleGroup#comparison_operator}.
     */
    readonly comparisonOperator: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size Wafv2RuleGroup#size}.
     */
    readonly size: number;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementAndStatementStatement {
    /**
     * and_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#and_statement Wafv2RuleGroup#and_statement}
     */
    readonly andStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatement[];
    /**
     * byte_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#byte_match_statement Wafv2RuleGroup#byte_match_statement}
     */
    readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatement[];
    /**
     * geo_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#geo_match_statement Wafv2RuleGroup#geo_match_statement}
     */
    readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatement[];
    /**
     * ip_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_reference_statement Wafv2RuleGroup#ip_set_reference_statement}
     */
    readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatement[];
    /**
     * not_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#not_statement Wafv2RuleGroup#not_statement}
     */
    readonly notStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatement[];
    /**
     * or_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#or_statement Wafv2RuleGroup#or_statement}
     */
    readonly orStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatement[];
    /**
     * regex_pattern_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#regex_pattern_set_reference_statement Wafv2RuleGroup#regex_pattern_set_reference_statement}
     */
    readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatement[];
    /**
     * size_constraint_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size_constraint_statement Wafv2RuleGroup#size_constraint_statement}
     */
    readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatement[];
    /**
     * sqli_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#sqli_match_statement Wafv2RuleGroup#sqli_match_statement}
     */
    readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatement[];
    /**
     * xss_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#xss_match_statement Wafv2RuleGroup#xss_match_statement}
     */
    readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatement[];
}
export interface Wafv2RuleGroupRuleStatementAndStatement {
    /**
     * statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#statement Wafv2RuleGroup#statement}
     */
    readonly statement: Wafv2RuleGroupRuleStatementAndStatementStatement[];
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementByteMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#positional_constraint Wafv2RuleGroup#positional_constraint}.
     */
    readonly positionalConstraint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#search_string Wafv2RuleGroup#search_string}.
     */
    readonly searchString: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
}
export interface Wafv2RuleGroupRuleStatementGeoMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#country_codes Wafv2RuleGroup#country_codes}.
     */
    readonly countryCodes: string[];
    /**
     * forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#forwarded_ip_config Wafv2RuleGroup#forwarded_ip_config}
     */
    readonly forwardedIpConfig?: Wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#position Wafv2RuleGroup#position}.
     */
    readonly position: string;
}
export interface Wafv2RuleGroupRuleStatementIpSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * ip_set_forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_forwarded_ip_config Wafv2RuleGroup#ip_set_forwarded_ip_config}
     */
    readonly ipSetForwardedIpConfig?: Wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#positional_constraint Wafv2RuleGroup#positional_constraint}.
     */
    readonly positionalConstraint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#search_string Wafv2RuleGroup#search_string}.
     */
    readonly searchString: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#country_codes Wafv2RuleGroup#country_codes}.
     */
    readonly countryCodes: string[];
    /**
     * forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#forwarded_ip_config Wafv2RuleGroup#forwarded_ip_config}
     */
    readonly forwardedIpConfig?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#position Wafv2RuleGroup#position}.
     */
    readonly position: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * ip_set_forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_forwarded_ip_config Wafv2RuleGroup#ip_set_forwarded_ip_config}
     */
    readonly ipSetForwardedIpConfig?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#comparison_operator Wafv2RuleGroup#comparison_operator}.
     */
    readonly comparisonOperator: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size Wafv2RuleGroup#size}.
     */
    readonly size: number;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatement {
    /**
     * byte_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#byte_match_statement Wafv2RuleGroup#byte_match_statement}
     */
    readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatement[];
    /**
     * geo_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#geo_match_statement Wafv2RuleGroup#geo_match_statement}
     */
    readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatement[];
    /**
     * ip_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_reference_statement Wafv2RuleGroup#ip_set_reference_statement}
     */
    readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement[];
    /**
     * regex_pattern_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#regex_pattern_set_reference_statement Wafv2RuleGroup#regex_pattern_set_reference_statement}
     */
    readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement[];
    /**
     * size_constraint_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size_constraint_statement Wafv2RuleGroup#size_constraint_statement}
     */
    readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatement[];
    /**
     * sqli_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#sqli_match_statement Wafv2RuleGroup#sqli_match_statement}
     */
    readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatement[];
    /**
     * xss_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#xss_match_statement Wafv2RuleGroup#xss_match_statement}
     */
    readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatement[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatement {
    /**
     * statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#statement Wafv2RuleGroup#statement}
     */
    readonly statement: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatement[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#positional_constraint Wafv2RuleGroup#positional_constraint}.
     */
    readonly positionalConstraint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#search_string Wafv2RuleGroup#search_string}.
     */
    readonly searchString: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#country_codes Wafv2RuleGroup#country_codes}.
     */
    readonly countryCodes: string[];
    /**
     * forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#forwarded_ip_config Wafv2RuleGroup#forwarded_ip_config}
     */
    readonly forwardedIpConfig?: Wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#position Wafv2RuleGroup#position}.
     */
    readonly position: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * ip_set_forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_forwarded_ip_config Wafv2RuleGroup#ip_set_forwarded_ip_config}
     */
    readonly ipSetForwardedIpConfig?: Wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#positional_constraint Wafv2RuleGroup#positional_constraint}.
     */
    readonly positionalConstraint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#search_string Wafv2RuleGroup#search_string}.
     */
    readonly searchString: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#country_codes Wafv2RuleGroup#country_codes}.
     */
    readonly countryCodes: string[];
    /**
     * forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#forwarded_ip_config Wafv2RuleGroup#forwarded_ip_config}
     */
    readonly forwardedIpConfig?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#position Wafv2RuleGroup#position}.
     */
    readonly position: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * ip_set_forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_forwarded_ip_config Wafv2RuleGroup#ip_set_forwarded_ip_config}
     */
    readonly ipSetForwardedIpConfig?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#comparison_operator Wafv2RuleGroup#comparison_operator}.
     */
    readonly comparisonOperator: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size Wafv2RuleGroup#size}.
     */
    readonly size: number;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatement {
    /**
     * byte_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#byte_match_statement Wafv2RuleGroup#byte_match_statement}
     */
    readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatement[];
    /**
     * geo_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#geo_match_statement Wafv2RuleGroup#geo_match_statement}
     */
    readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatement[];
    /**
     * ip_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_reference_statement Wafv2RuleGroup#ip_set_reference_statement}
     */
    readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement[];
    /**
     * regex_pattern_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#regex_pattern_set_reference_statement Wafv2RuleGroup#regex_pattern_set_reference_statement}
     */
    readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement[];
    /**
     * size_constraint_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size_constraint_statement Wafv2RuleGroup#size_constraint_statement}
     */
    readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatement[];
    /**
     * sqli_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#sqli_match_statement Wafv2RuleGroup#sqli_match_statement}
     */
    readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatement[];
    /**
     * xss_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#xss_match_statement Wafv2RuleGroup#xss_match_statement}
     */
    readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatement[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatement {
    /**
     * statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#statement Wafv2RuleGroup#statement}
     */
    readonly statement: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatement[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#positional_constraint Wafv2RuleGroup#positional_constraint}.
     */
    readonly positionalConstraint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#search_string Wafv2RuleGroup#search_string}.
     */
    readonly searchString: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#country_codes Wafv2RuleGroup#country_codes}.
     */
    readonly countryCodes: string[];
    /**
     * forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#forwarded_ip_config Wafv2RuleGroup#forwarded_ip_config}
     */
    readonly forwardedIpConfig?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#position Wafv2RuleGroup#position}.
     */
    readonly position: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * ip_set_forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_forwarded_ip_config Wafv2RuleGroup#ip_set_forwarded_ip_config}
     */
    readonly ipSetForwardedIpConfig?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#comparison_operator Wafv2RuleGroup#comparison_operator}.
     */
    readonly comparisonOperator: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size Wafv2RuleGroup#size}.
     */
    readonly size: number;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatement {
    /**
     * byte_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#byte_match_statement Wafv2RuleGroup#byte_match_statement}
     */
    readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatement[];
    /**
     * geo_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#geo_match_statement Wafv2RuleGroup#geo_match_statement}
     */
    readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatement[];
    /**
     * ip_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_reference_statement Wafv2RuleGroup#ip_set_reference_statement}
     */
    readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement[];
    /**
     * regex_pattern_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#regex_pattern_set_reference_statement Wafv2RuleGroup#regex_pattern_set_reference_statement}
     */
    readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement[];
    /**
     * size_constraint_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size_constraint_statement Wafv2RuleGroup#size_constraint_statement}
     */
    readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatement[];
    /**
     * sqli_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#sqli_match_statement Wafv2RuleGroup#sqli_match_statement}
     */
    readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatement[];
    /**
     * xss_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#xss_match_statement Wafv2RuleGroup#xss_match_statement}
     */
    readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatement[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatement {
    /**
     * statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#statement Wafv2RuleGroup#statement}
     */
    readonly statement: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatement[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#comparison_operator Wafv2RuleGroup#comparison_operator}.
     */
    readonly comparisonOperator: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size Wafv2RuleGroup#size}.
     */
    readonly size: number;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementNotStatementStatement {
    /**
     * and_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#and_statement Wafv2RuleGroup#and_statement}
     */
    readonly andStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatement[];
    /**
     * byte_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#byte_match_statement Wafv2RuleGroup#byte_match_statement}
     */
    readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatement[];
    /**
     * geo_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#geo_match_statement Wafv2RuleGroup#geo_match_statement}
     */
    readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatement[];
    /**
     * ip_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_reference_statement Wafv2RuleGroup#ip_set_reference_statement}
     */
    readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatement[];
    /**
     * not_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#not_statement Wafv2RuleGroup#not_statement}
     */
    readonly notStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatement[];
    /**
     * or_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#or_statement Wafv2RuleGroup#or_statement}
     */
    readonly orStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatement[];
    /**
     * regex_pattern_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#regex_pattern_set_reference_statement Wafv2RuleGroup#regex_pattern_set_reference_statement}
     */
    readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatement[];
    /**
     * size_constraint_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size_constraint_statement Wafv2RuleGroup#size_constraint_statement}
     */
    readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatement[];
    /**
     * sqli_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#sqli_match_statement Wafv2RuleGroup#sqli_match_statement}
     */
    readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatement[];
    /**
     * xss_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#xss_match_statement Wafv2RuleGroup#xss_match_statement}
     */
    readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatement[];
}
export interface Wafv2RuleGroupRuleStatementNotStatement {
    /**
     * statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#statement Wafv2RuleGroup#statement}
     */
    readonly statement: Wafv2RuleGroupRuleStatementNotStatementStatement[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#positional_constraint Wafv2RuleGroup#positional_constraint}.
     */
    readonly positionalConstraint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#search_string Wafv2RuleGroup#search_string}.
     */
    readonly searchString: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#country_codes Wafv2RuleGroup#country_codes}.
     */
    readonly countryCodes: string[];
    /**
     * forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#forwarded_ip_config Wafv2RuleGroup#forwarded_ip_config}
     */
    readonly forwardedIpConfig?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#position Wafv2RuleGroup#position}.
     */
    readonly position: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * ip_set_forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_forwarded_ip_config Wafv2RuleGroup#ip_set_forwarded_ip_config}
     */
    readonly ipSetForwardedIpConfig?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#comparison_operator Wafv2RuleGroup#comparison_operator}.
     */
    readonly comparisonOperator: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size Wafv2RuleGroup#size}.
     */
    readonly size: number;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatement {
    /**
     * byte_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#byte_match_statement Wafv2RuleGroup#byte_match_statement}
     */
    readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatement[];
    /**
     * geo_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#geo_match_statement Wafv2RuleGroup#geo_match_statement}
     */
    readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatement[];
    /**
     * ip_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_reference_statement Wafv2RuleGroup#ip_set_reference_statement}
     */
    readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement[];
    /**
     * regex_pattern_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#regex_pattern_set_reference_statement Wafv2RuleGroup#regex_pattern_set_reference_statement}
     */
    readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement[];
    /**
     * size_constraint_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size_constraint_statement Wafv2RuleGroup#size_constraint_statement}
     */
    readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatement[];
    /**
     * sqli_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#sqli_match_statement Wafv2RuleGroup#sqli_match_statement}
     */
    readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatement[];
    /**
     * xss_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#xss_match_statement Wafv2RuleGroup#xss_match_statement}
     */
    readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatement[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatement {
    /**
     * statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#statement Wafv2RuleGroup#statement}
     */
    readonly statement: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatement[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#positional_constraint Wafv2RuleGroup#positional_constraint}.
     */
    readonly positionalConstraint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#search_string Wafv2RuleGroup#search_string}.
     */
    readonly searchString: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#country_codes Wafv2RuleGroup#country_codes}.
     */
    readonly countryCodes: string[];
    /**
     * forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#forwarded_ip_config Wafv2RuleGroup#forwarded_ip_config}
     */
    readonly forwardedIpConfig?: Wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#position Wafv2RuleGroup#position}.
     */
    readonly position: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * ip_set_forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_forwarded_ip_config Wafv2RuleGroup#ip_set_forwarded_ip_config}
     */
    readonly ipSetForwardedIpConfig?: Wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#positional_constraint Wafv2RuleGroup#positional_constraint}.
     */
    readonly positionalConstraint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#search_string Wafv2RuleGroup#search_string}.
     */
    readonly searchString: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#country_codes Wafv2RuleGroup#country_codes}.
     */
    readonly countryCodes: string[];
    /**
     * forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#forwarded_ip_config Wafv2RuleGroup#forwarded_ip_config}
     */
    readonly forwardedIpConfig?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#position Wafv2RuleGroup#position}.
     */
    readonly position: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * ip_set_forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_forwarded_ip_config Wafv2RuleGroup#ip_set_forwarded_ip_config}
     */
    readonly ipSetForwardedIpConfig?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#comparison_operator Wafv2RuleGroup#comparison_operator}.
     */
    readonly comparisonOperator: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size Wafv2RuleGroup#size}.
     */
    readonly size: number;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatement {
    /**
     * byte_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#byte_match_statement Wafv2RuleGroup#byte_match_statement}
     */
    readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatement[];
    /**
     * geo_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#geo_match_statement Wafv2RuleGroup#geo_match_statement}
     */
    readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatement[];
    /**
     * ip_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_reference_statement Wafv2RuleGroup#ip_set_reference_statement}
     */
    readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement[];
    /**
     * regex_pattern_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#regex_pattern_set_reference_statement Wafv2RuleGroup#regex_pattern_set_reference_statement}
     */
    readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement[];
    /**
     * size_constraint_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size_constraint_statement Wafv2RuleGroup#size_constraint_statement}
     */
    readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatement[];
    /**
     * sqli_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#sqli_match_statement Wafv2RuleGroup#sqli_match_statement}
     */
    readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatement[];
    /**
     * xss_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#xss_match_statement Wafv2RuleGroup#xss_match_statement}
     */
    readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatement[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatement {
    /**
     * statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#statement Wafv2RuleGroup#statement}
     */
    readonly statement: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatement[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#positional_constraint Wafv2RuleGroup#positional_constraint}.
     */
    readonly positionalConstraint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#search_string Wafv2RuleGroup#search_string}.
     */
    readonly searchString: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#country_codes Wafv2RuleGroup#country_codes}.
     */
    readonly countryCodes: string[];
    /**
     * forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#forwarded_ip_config Wafv2RuleGroup#forwarded_ip_config}
     */
    readonly forwardedIpConfig?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#fallback_behavior Wafv2RuleGroup#fallback_behavior}.
     */
    readonly fallbackBehavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#header_name Wafv2RuleGroup#header_name}.
     */
    readonly headerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#position Wafv2RuleGroup#position}.
     */
    readonly position: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * ip_set_forwarded_ip_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_forwarded_ip_config Wafv2RuleGroup#ip_set_forwarded_ip_config}
     */
    readonly ipSetForwardedIpConfig?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#comparison_operator Wafv2RuleGroup#comparison_operator}.
     */
    readonly comparisonOperator: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size Wafv2RuleGroup#size}.
     */
    readonly size: number;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatement {
    /**
     * byte_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#byte_match_statement Wafv2RuleGroup#byte_match_statement}
     */
    readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatement[];
    /**
     * geo_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#geo_match_statement Wafv2RuleGroup#geo_match_statement}
     */
    readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatement[];
    /**
     * ip_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_reference_statement Wafv2RuleGroup#ip_set_reference_statement}
     */
    readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement[];
    /**
     * regex_pattern_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#regex_pattern_set_reference_statement Wafv2RuleGroup#regex_pattern_set_reference_statement}
     */
    readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement[];
    /**
     * size_constraint_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size_constraint_statement Wafv2RuleGroup#size_constraint_statement}
     */
    readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatement[];
    /**
     * sqli_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#sqli_match_statement Wafv2RuleGroup#sqli_match_statement}
     */
    readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatement[];
    /**
     * xss_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#xss_match_statement Wafv2RuleGroup#xss_match_statement}
     */
    readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatement[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatement {
    /**
     * statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#statement Wafv2RuleGroup#statement}
     */
    readonly statement: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatement[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#comparison_operator Wafv2RuleGroup#comparison_operator}.
     */
    readonly comparisonOperator: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size Wafv2RuleGroup#size}.
     */
    readonly size: number;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementOrStatementStatement {
    /**
     * and_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#and_statement Wafv2RuleGroup#and_statement}
     */
    readonly andStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatement[];
    /**
     * byte_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#byte_match_statement Wafv2RuleGroup#byte_match_statement}
     */
    readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatement[];
    /**
     * geo_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#geo_match_statement Wafv2RuleGroup#geo_match_statement}
     */
    readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatement[];
    /**
     * ip_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_reference_statement Wafv2RuleGroup#ip_set_reference_statement}
     */
    readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatement[];
    /**
     * not_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#not_statement Wafv2RuleGroup#not_statement}
     */
    readonly notStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatement[];
    /**
     * or_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#or_statement Wafv2RuleGroup#or_statement}
     */
    readonly orStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatement[];
    /**
     * regex_pattern_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#regex_pattern_set_reference_statement Wafv2RuleGroup#regex_pattern_set_reference_statement}
     */
    readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatement[];
    /**
     * size_constraint_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size_constraint_statement Wafv2RuleGroup#size_constraint_statement}
     */
    readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatement[];
    /**
     * sqli_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#sqli_match_statement Wafv2RuleGroup#sqli_match_statement}
     */
    readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatement[];
    /**
     * xss_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#xss_match_statement Wafv2RuleGroup#xss_match_statement}
     */
    readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatement[];
}
export interface Wafv2RuleGroupRuleStatementOrStatement {
    /**
     * statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#statement Wafv2RuleGroup#statement}
     */
    readonly statement: Wafv2RuleGroupRuleStatementOrStatementStatement[];
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#arn Wafv2RuleGroup#arn}.
     */
    readonly arn: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementSizeConstraintStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#comparison_operator Wafv2RuleGroup#comparison_operator}.
     */
    readonly comparisonOperator: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size Wafv2RuleGroup#size}.
     */
    readonly size: number;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementSqliMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBody {
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod {
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString {
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath {
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatch {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#all_query_arguments Wafv2RuleGroup#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#body Wafv2RuleGroup#body}
     */
    readonly body?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#method Wafv2RuleGroup#method}
     */
    readonly method?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#query_string Wafv2RuleGroup#query_string}
     */
    readonly queryString?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_header Wafv2RuleGroup#single_header}
     */
    readonly singleHeader?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#single_query_argument Wafv2RuleGroup#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#uri_path Wafv2RuleGroup#uri_path}
     */
    readonly uriPath?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath[];
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#type Wafv2RuleGroup#type}.
     */
    readonly type: string;
}
export interface Wafv2RuleGroupRuleStatementXssMatchStatement {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#field_to_match Wafv2RuleGroup#field_to_match}
     */
    readonly fieldToMatch?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatch[];
    /**
     * text_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#text_transformation Wafv2RuleGroup#text_transformation}
     */
    readonly textTransformation: Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2RuleGroupRuleStatement {
    /**
     * and_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#and_statement Wafv2RuleGroup#and_statement}
     */
    readonly andStatement?: Wafv2RuleGroupRuleStatementAndStatement[];
    /**
     * byte_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#byte_match_statement Wafv2RuleGroup#byte_match_statement}
     */
    readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementByteMatchStatement[];
    /**
     * geo_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#geo_match_statement Wafv2RuleGroup#geo_match_statement}
     */
    readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementGeoMatchStatement[];
    /**
     * ip_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#ip_set_reference_statement Wafv2RuleGroup#ip_set_reference_statement}
     */
    readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementIpSetReferenceStatement[];
    /**
     * not_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#not_statement Wafv2RuleGroup#not_statement}
     */
    readonly notStatement?: Wafv2RuleGroupRuleStatementNotStatement[];
    /**
     * or_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#or_statement Wafv2RuleGroup#or_statement}
     */
    readonly orStatement?: Wafv2RuleGroupRuleStatementOrStatement[];
    /**
     * regex_pattern_set_reference_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#regex_pattern_set_reference_statement Wafv2RuleGroup#regex_pattern_set_reference_statement}
     */
    readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatement[];
    /**
     * size_constraint_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#size_constraint_statement Wafv2RuleGroup#size_constraint_statement}
     */
    readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementSizeConstraintStatement[];
    /**
     * sqli_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#sqli_match_statement Wafv2RuleGroup#sqli_match_statement}
     */
    readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementSqliMatchStatement[];
    /**
     * xss_match_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#xss_match_statement Wafv2RuleGroup#xss_match_statement}
     */
    readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementXssMatchStatement[];
}
export interface Wafv2RuleGroupRuleVisibilityConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}.
     */
    readonly cloudwatchMetricsEnabled: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#metric_name Wafv2RuleGroup#metric_name}.
     */
    readonly metricName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}.
     */
    readonly sampledRequestsEnabled: boolean;
}
export interface Wafv2RuleGroupRule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#priority Wafv2RuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#action Wafv2RuleGroup#action}
     */
    readonly action: Wafv2RuleGroupRuleAction[];
    /**
     * statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#statement Wafv2RuleGroup#statement}
     */
    readonly statement: Wafv2RuleGroupRuleStatement[];
    /**
     * visibility_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#visibility_config Wafv2RuleGroup#visibility_config}
     */
    readonly visibilityConfig: Wafv2RuleGroupRuleVisibilityConfig[];
}
export interface Wafv2RuleGroupVisibilityConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}.
     */
    readonly cloudwatchMetricsEnabled: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#metric_name Wafv2RuleGroup#metric_name}.
     */
    readonly metricName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}.
     */
    readonly sampledRequestsEnabled: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html aws_wafv2_rule_group}.
 */
export declare class Wafv2RuleGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html aws_wafv2_rule_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Wafv2RuleGroupConfig);
    get arn(): string;
    private _capacity;
    get capacity(): number;
    set capacity(value: number);
    get capacityInput(): number;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get lockToken(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _scope;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _rule?;
    get rule(): Wafv2RuleGroupRule[];
    set rule(value: Wafv2RuleGroupRule[]);
    resetRule(): void;
    get ruleInput(): Wafv2RuleGroupRule[] | undefined;
    private _visibilityConfig;
    get visibilityConfig(): Wafv2RuleGroupVisibilityConfig[];
    set visibilityConfig(value: Wafv2RuleGroupVisibilityConfig[]);
    get visibilityConfigInput(): Wafv2RuleGroupVisibilityConfig[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
