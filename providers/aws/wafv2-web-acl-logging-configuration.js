"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wafv2WebAclLoggingConfiguration = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
    };
}
function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        label_name: cdktf.stringToTerraform(struct.labelName),
    };
}
function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action_condition: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform)(struct.actionCondition),
        label_name_condition: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform)(struct.labelNameCondition),
    };
}
function wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        behavior: cdktf.stringToTerraform(struct.behavior),
        requirement: cdktf.stringToTerraform(struct.requirement),
        condition: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform)(struct.condition),
    };
}
function wafv2WebAclLoggingConfigurationLoggingFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_behavior: cdktf.stringToTerraform(struct.defaultBehavior),
        filter: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform)(struct.filter),
    };
}
function wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
function wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
function wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform)(struct.uriPath),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html aws_wafv2_web_acl_logging_configuration}.
 */
class Wafv2WebAclLoggingConfiguration extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html aws_wafv2_web_acl_logging_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_wafv2_web_acl_logging_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._logDestinationConfigs = config.logDestinationConfigs;
        this._resourceArn = config.resourceArn;
        this._loggingFilter = config.loggingFilter;
        this._redactedFields = config.redactedFields;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get logDestinationConfigs() {
        return this.getListAttribute('log_destination_configs');
    }
    set logDestinationConfigs(value) {
        this._logDestinationConfigs = value;
    }
    // Temporarily expose input value. Use with caution.
    get logDestinationConfigsInput() {
        return this._logDestinationConfigs;
    }
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    set resourceArn(value) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceArnInput() {
        return this._resourceArn;
    }
    get loggingFilter() {
        return this.interpolationForAttribute('logging_filter');
    }
    set loggingFilter(value) {
        this._loggingFilter = value;
    }
    resetLoggingFilter() {
        this._loggingFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loggingFilterInput() {
        return this._loggingFilter;
    }
    get redactedFields() {
        return this.interpolationForAttribute('redacted_fields');
    }
    set redactedFields(value) {
        this._redactedFields = value;
    }
    resetRedactedFields() {
        this._redactedFields = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get redactedFieldsInput() {
        return this._redactedFields;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            log_destination_configs: cdktf.listMapper(cdktf.stringToTerraform)(this._logDestinationConfigs),
            resource_arn: cdktf.stringToTerraform(this._resourceArn),
            logging_filter: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterToTerraform)(this._loggingFilter),
            redacted_fields: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform)(this._redactedFields),
        };
    }
}
exports.Wafv2WebAclLoggingConfiguration = Wafv2WebAclLoggingConfiguration;
_a = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfiguration[_a] = { fqn: "hashicorp_aws.Wafv2WebAclLoggingConfiguration", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FmdjItd2ViLWFjbC1sb2dnaW5nLWNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWZ2Mi13ZWItYWNsLWxvZ2dpbmctY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQXFDL0IsU0FBUyxxRkFBcUYsQ0FBQyxNQUFtRjtJQUNoTCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNoRCxDQUFBO0FBQ0gsQ0FBQztBQVNELFNBQVMsd0ZBQXdGLENBQUMsTUFBc0Y7SUFDdEwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDdkQsQ0FBQTtBQUNILENBQUM7QUFpQkQsU0FBUyxzRUFBc0UsQ0FBQyxNQUFvRTtJQUNsSixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMscUZBQXFGLENBQUMsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO1FBQ2xKLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsd0ZBQXdGLENBQUMsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7S0FDN0osQ0FBQTtBQUNILENBQUM7QUFtQkQsU0FBUyw2REFBNkQsQ0FBQyxNQUEyRDtJQUNoSSxJQUFJLENBQUMsS0FBSyxDQUFD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cEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFBO0lBQzVCLENBQUM7SUFJRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsaUJBQWlCLENBQVEsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBc0Q7UUFDOUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQTtJQUM3QixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCx1QkFBdUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztZQUMvRixZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEQsY0FBYyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsdURBQXVELENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzlHLGVBQWUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHdEQUF3RCxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUNsSCxDQUFDO0lBQ0osQ0FBQzs7QUE1R0gsMEVBNkdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3cy9yL3dhZnYyX3dlYl9hY2xfbG9nZ2luZ19jb25maWd1cmF0aW9uLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ0Rlc3RpbmF0aW9uQ29uZmlnczogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nZ2luZ0ZpbHRlcj86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlZGFjdGVkRmllbGRzPzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzW107XG59XG5leHBvcnQgaW50ZXJmYWNlIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uQWN0aW9uQ29uZGl0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY3Rpb246IHN0cmluZztcbn1cblxuZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25BY3Rpb25Db25kaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkFjdGlvbkNvbmRpdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWN0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uTGFiZWxOYW1lQ29uZGl0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhYmVsTmFtZTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkxhYmVsTmFtZUNvbmRpdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uTGFiZWxOYW1lQ29uZGl0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGxhYmVsX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGFiZWxOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWN0aW9uQ29uZGl0aW9uPzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25BY3Rpb25Db25kaXRpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGFiZWxOYW1lQ29uZGl0aW9uPzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25MYWJlbE5hbWVDb25kaXRpb25bXTtcbn1cblxuZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25fY29uZGl0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uQWN0aW9uQ29uZGl0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWN0aW9uQ29uZGl0aW9uKSxcbiAgICBsYWJlbF9uYW1lX2NvbmRpdGlvbjogY2RrdGYubGlzdE1hcHBlcih3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkxhYmVsTmFtZUNvbmRpdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLmxhYmVsTmFtZUNvbmRpdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJlaGF2aW9yOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVpcmVtZW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbmRpdGlvbjogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25bXTtcbn1cblxuZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBiZWhhdmlvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5iZWhhdmlvciksXG4gICAgcmVxdWlyZW1lbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVxdWlyZW1lbnQpLFxuICAgIGNvbmRpdGlvbjogY2RrdGYubGlzdE1hcHBlcih3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbmRpdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0QmVoYXZpb3I6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmlsdGVyOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlcltdO1xufVxuXG5mdW5jdGlvbiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlclRvVGVycmFmb3JtKHN0cnVjdD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRlZmF1bHRfYmVoYXZpb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVmYXVsdEJlaGF2aW9yKSxcbiAgICBmaWx0ZXI6IGNka3RmLmxpc3RNYXBwZXIod2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJUb1RlcnJhZm9ybSkoc3RydWN0IS5maWx0ZXIpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQWxsUXVlcnlBcmd1bWVudHMge1xufVxuXG5mdW5jdGlvbiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNBbGxRdWVyeUFyZ3VtZW50c1RvVGVycmFmb3JtKHN0cnVjdD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0FsbFF1ZXJ5QXJndW1lbnRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQm9keSB7XG59XG5cbmZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0JvZHlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNCb2R5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzTWV0aG9kIHtcbn1cblxuZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzTWV0aG9kVG9UZXJyYWZvcm0oc3RydWN0PzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzTWV0aG9kKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzUXVlcnlTdHJpbmcge1xufVxuXG5mdW5jdGlvbiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNRdWVyeVN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1F1ZXJ5U3RyaW5nKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlSGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlSGVhZGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVRdWVyeUFyZ3VtZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlUXVlcnlBcmd1bWVudFRvVGVycmFmb3JtKHN0cnVjdD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1NpbmdsZVF1ZXJ5QXJndW1lbnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1VyaVBhdGgge1xufVxuXG5mdW5jdGlvbiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNVcmlQYXRoVG9UZXJyYWZvcm0oc3RydWN0PzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzVXJpUGF0aCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbFF1ZXJ5QXJndW1lbnRzPzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQWxsUXVlcnlBcmd1bWVudHNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYm9keT86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0JvZHlbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWV0aG9kPzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzTWV0aG9kW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHF1ZXJ5U3RyaW5nPzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzUXVlcnlTdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2luZ2xlSGVhZGVyPzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlSGVhZGVyW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNpbmdsZVF1ZXJ5QXJndW1lbnQ/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVRdWVyeUFyZ3VtZW50W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVyaVBhdGg/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNVcmlQYXRoW107XG59XG5cbmZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1RvVGVycmFmb3JtKHN0cnVjdD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbGxfcXVlcnlfYXJndW1lbnRzOiBjZGt0Zi5saXN0TWFwcGVyKHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0FsbFF1ZXJ5QXJndW1lbnRzVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWxsUXVlcnlBcmd1bWVudHMpLFxuICAgIGJvZHk6IGNka3RmLmxpc3RNYXBwZXIod2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQm9keVRvVGVycmFmb3JtKShzdHJ1Y3QhLmJvZHkpLFxuICAgIG1ldGhvZDogY2RrdGYubGlzdE1hcHBlcih3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNNZXRob2RUb1RlcnJhZm9ybSkoc3RydWN0IS5tZXRob2QpLFxuICAgIHF1ZXJ5X3N0cmluZzogY2RrdGYubGlzdE1hcHBlcih3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNRdWVyeVN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnF1ZXJ5U3RyaW5nKSxcbiAgICBzaW5nbGVfaGVhZGVyOiBjZGt0Zi5saXN0TWFwcGVyKHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1NpbmdsZUhlYWRlclRvVGVycmFmb3JtKShzdHJ1Y3QhLnNpbmdsZUhlYWRlciksXG4gICAgc2luZ2xlX3F1ZXJ5X2FyZ3VtZW50OiBjZGt0Zi5saXN0TWFwcGVyKHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1NpbmdsZVF1ZXJ5QXJndW1lbnRUb1RlcnJhZm9ybSkoc3RydWN0IS5zaW5nbGVRdWVyeUFyZ3VtZW50KSxcbiAgICB1cmlfcGF0aDogY2RrdGYubGlzdE1hcHBlcih3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNVcmlQYXRoVG9UZXJyYWZvcm0pKHN0cnVjdCEudXJpUGF0aCksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3dhZnYyX3dlYl9hY2xfbG9nZ2luZ19jb25maWd1cmF0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2xvZ0Rlc3RpbmF0aW9uQ29uZmlncyA9IGNvbmZpZy5sb2dEZXN0aW5hdGlvbkNvbmZpZ3M7XG4gICAgdGhpcy5fcmVzb3VyY2VBcm4gPSBjb25maWcucmVzb3VyY2VBcm47XG4gICAgdGhpcy5fbG9nZ2luZ0ZpbHRlciA9IGNvbmZpZy5sb2dnaW5nRmlsdGVyO1xuICAgIHRoaXMuX3JlZGFjdGVkRmllbGRzID0gY29uZmlnLnJlZGFjdGVkRmllbGRzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbG9nX2Rlc3RpbmF0aW9uX2NvbmZpZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbG9nRGVzdGluYXRpb25Db25maWdzOiBzdHJpbmdbXTtcbiAgcHVibGljIGdldCBsb2dEZXN0aW5hdGlvbkNvbmZpZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnbG9nX2Rlc3RpbmF0aW9uX2NvbmZpZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ0Rlc3RpbmF0aW9uQ29uZmlncyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9sb2dEZXN0aW5hdGlvbkNvbmZpZ3MgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nRGVzdGluYXRpb25Db25maWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0Rlc3RpbmF0aW9uQ29uZmlnc1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Jlc291cmNlQXJuOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZUFyblxuICB9XG5cbiAgLy8gbG9nZ2luZ19maWx0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9nZ2luZ0ZpbHRlcj86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyW107XG4gIHB1YmxpYyBnZXQgbG9nZ2luZ0ZpbHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsb2dnaW5nX2ZpbHRlcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ2dpbmdGaWx0ZXIodmFsdWU6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyW10gKSB7XG4gICAgdGhpcy5fbG9nZ2luZ0ZpbHRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvZ2dpbmdGaWx0ZXIoKSB7XG4gICAgdGhpcy5fbG9nZ2luZ0ZpbHRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nZ2luZ0ZpbHRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2dnaW5nRmlsdGVyXG4gIH1cblxuICAvLyByZWRhY3RlZF9maWVsZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVkYWN0ZWRGaWVsZHM/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNbXTtcbiAgcHVibGljIGdldCByZWRhY3RlZEZpZWxkcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZWRhY3RlZF9maWVsZHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZWRhY3RlZEZpZWxkcyh2YWx1ZTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzW10gKSB7XG4gICAgdGhpcy5fcmVkYWN0ZWRGaWVsZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWRhY3RlZEZpZWxkcygpIHtcbiAgICB0aGlzLl9yZWRhY3RlZEZpZWxkcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVkYWN0ZWRGaWVsZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVkYWN0ZWRGaWVsZHNcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nX2Rlc3RpbmF0aW9uX2NvbmZpZ3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2xvZ0Rlc3RpbmF0aW9uQ29uZmlncyksXG4gICAgICByZXNvdXJjZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Jlc291cmNlQXJuKSxcbiAgICAgIGxvZ2dpbmdfZmlsdGVyOiBjZGt0Zi5saXN0TWFwcGVyKHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyVG9UZXJyYWZvcm0pKHRoaXMuX2xvZ2dpbmdGaWx0ZXIpLFxuICAgICAgcmVkYWN0ZWRfZmllbGRzOiBjZGt0Zi5saXN0TWFwcGVyKHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1RvVGVycmFmb3JtKSh0aGlzLl9yZWRhY3RlZEZpZWxkcyksXG4gICAgfTtcbiAgfVxufVxuIl19